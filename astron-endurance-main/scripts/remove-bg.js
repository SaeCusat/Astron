const fs = require('fs');
const sharp = require('sharp');

async function processImage() {
  const inputPath = 'public/team/HEADS/BIJU SIR.jpg';
  const outputPath = 'public/team/HEADS/BIJU_SIR.png';

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Background color model:
  function getBgRef(x, y) {
    const tY = y / height;
    const tX = x / width;
    return [
      226 - 9 * tY - 4 * tX,
      188 - 8 * tY - 3 * tX,
      205 - 8 * tY - 3 * tX
    ];
  }

  // Alpha mask
  const alpha = new Float32Array(width * height);
  alpha.fill(255);

  const queue = new Int32Array(width * height);
  let qHead = 0, qTail = 0;
  const visited = new Uint8Array(width * height);

  function enqueue(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (visited[idx]) return;
    visited[idx] = 1;
    queue[qTail++] = idx;
  }

  // Seed top and sides
  for (let x = 0; x < width; x++) enqueue(x, 0);
  for (let y = 0; y < 930; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  function colorDist(pIdx, x, y) {
    const r = data[pIdx * 3];
    const g = data[pIdx * 3 + 1];
    const b = data[pIdx * 3 + 2];
    const [br, bg, bb] = getBgRef(x, y);
    const dr = r - br;
    const dg = g - bg;
    const db = b - bb;
    return Math.sqrt(dr * dr * 1.2 + dg * dg * 1.2 + db * db * 1.0);
  }

  // Use slightly higher threshold for clean background coverage: 32
  const bgThreshold = 32;
  const softThreshold = 56;

  while (qHead < qTail) {
    const idx = queue[qHead++];
    const x = idx % width;
    const y = Math.floor(idx / width);

    alpha[idx] = 0;

    const nCoords = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1]
    ];

    for (const [nx, ny] of nCoords) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          const d = colorDist(nIdx, nx, ny);
          if (d <= bgThreshold) {
            visited[nIdx] = 1;
            queue[qTail++] = nIdx;
          }
        }
      }
    }
  }

  console.log(`Flood fill completed. Background pixels: ${qTail}`);

  // Now create refined alpha with soft transition
  const refinedAlpha = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    refinedAlpha[i] = alpha[i] > 0 ? 255 : 0;
  }

  // Boundary pixels
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (refinedAlpha[idx] === 255) {
        let isNearBg = false;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            if (refinedAlpha[(y + dy) * width + (x + dx)] === 0) {
              isNearBg = true;
              break;
            }
          }
          if (isNearBg) break;
        }

        if (isNearBg) {
          const d = colorDist(idx, x, y);
          if (d <= softThreshold) {
            const t = Math.max(0, Math.min(1, (d - bgThreshold) / (softThreshold - bgThreshold)));
            // Smooth curve
            const smoothT = t * t * (3 - 2 * t);
            refinedAlpha[idx] = Math.round(smoothT * 255);
          }
        }
      }
    }
  }

  // Defringe and reconstruct
  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const rIdx = pIdx * 3;
      const outIdx = pIdx * 4;

      let a = refinedAlpha[pIdx];
      let r = data[rIdx];
      let g = data[rIdx + 1];
      let b = data[rIdx + 2];

      if (a > 0 && a < 255) {
        const [br, bg, bb] = getBgRef(x, y);
        // If it's near hair (upper head region y < 450) and has pink tint, darken hair edge
        if (y < 450 && r > 100 && b > 100) {
          // Desaturate and match hair luminance
          const hairDarkness = 0.5;
          r = Math.round(r * hairDarkness);
          g = Math.round(g * hairDarkness);
          b = Math.round(b * hairDarkness);
        } else {
          const alphaFrac = a / 255;
          r = Math.max(0, Math.min(255, Math.round((r - br * (1 - alphaFrac)) / alphaFrac)));
          g = Math.max(0, Math.min(255, Math.round((g - bg * (1 - alphaFrac)) / alphaFrac)));
          b = Math.max(0, Math.min(255, Math.round((b - bb * (1 - alphaFrac)) / alphaFrac)));
        }
      }

      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;
      rgba[outIdx + 3] = a;
    }
  }

  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

  // Update dark preview as well
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 13, g: 14, b: 19, alpha: 1 }
    }
  })
  .composite([{ input: outputPath }])
  .png()
  .toFile('public/team/HEADS/BIJU_DARK_PREVIEW.png');

  console.log(`Saved background-removed image to ${outputPath}`);
}

processImage().catch(console.error);
