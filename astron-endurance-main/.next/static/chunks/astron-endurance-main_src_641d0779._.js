(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/vortex.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vortex",
    ()=>Vortex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/simplex-noise/dist/esm/simplex-noise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'\x75\x73\x65\x20\x63\x6c\x69\x65\x6e\x74';
;
;
;
;
const Vortex = (props)=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const particleCount = props.particleCount || 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = props.rangeY || 100;
    const baseTTL = 50;
    const rangeTTL = 150;
    const baseSpeed = props.baseSpeed || 0.0;
    const rangeSpeed = props.rangeSpeed || 1.5;
    const baseRadius = props.baseRadius || 1;
    const rangeRadius = props.rangeRadius || 2;
    const baseHue = props.baseHue || 14;
    const rangeHue = 30;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const backgroundColor = props.backgroundColor || '#000000';
    let tick = 0;
    const noise3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoise3D"])();
    let particleProps = new Float32Array(particlePropsLength);
    let center = [
        0,
        0
    ];
    const HALF_PI = 0.5 * Math.PI;
    const TAU = 2 * Math.PI;
    const TO_RAD = Math.PI / 180;
    const rand = (n)=>n * Math.random();
    const randRange = (n)=>n - rand(2 * n);
    const fadeInOut = (t, m)=>{
        let hm = 0.5 * m;
        return Math.abs((t + hm) % m - hm) / hm;
    };
    const lerp = (n1, n2, speed)=>(1 - speed) * n1 + speed * n2;
    const setup = ()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (canvas && container) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                resize(canvas, ctx);
                initParticles();
                draw(canvas, ctx);
            }
        }
    };
    const initParticles = ()=>{
        tick = 0;
        particleProps = new Float32Array(particlePropsLength);
        for(let i = 0; i < particlePropsLength; i += particlePropCount){
            initParticle(i);
        }
    };
    const initParticle = (i)=>{
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        let x, y, vx, vy, life, ttl, speed, radius, hue;
        x = rand(canvas.width);
        y = center[1] + randRange(rangeY);
        vx = 0;
        vy = 0;
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        speed = baseSpeed + rand(rangeSpeed);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);
        particleProps.set([
            x,
            y,
            vx,
            vy,
            life,
            ttl,
            speed,
            radius,
            hue
        ], i);
    };
    const draw = (canvas, ctx)=>{
        tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);
        animationFrameId.current = window.requestAnimationFrame(()=>draw(canvas, ctx));
    };
    const drawParticles = (ctx)=>{
        for(let i = 0; i < particlePropsLength; i += particlePropCount){
            updateParticle(i, ctx);
        }
    };
    const updateParticle = (i, ctx)=>{
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
        let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;
        x = particleProps[i];
        y = particleProps[i2];
        n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
        vx = lerp(particleProps[i3], Math.cos(n), 0.5);
        vy = lerp(particleProps[i4], Math.sin(n), 0.5);
        life = particleProps[i5];
        ttl = particleProps[i6];
        speed = particleProps[i7];
        x2 = x + vx * speed;
        y2 = y + vy * speed;
        radius = particleProps[i8];
        hue = particleProps[i9];
        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
        life++;
        particleProps[i] = x2;
        particleProps[i2] = y2;
        particleProps[i3] = vx;
        particleProps[i4] = vy;
        particleProps[i5] = life;
        (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
    };
    const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx)=>{
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineWidth = radius;
        ctx.strokeStyle = "hsla(".concat(hue, ",100%,60%,").concat(fadeInOut(life, ttl), ")");
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
    const checkBounds = (x, y, canvas)=>{
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };
    const resize = (canvas, ctx)=>{
        const { innerWidth, innerHeight } = window;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };
    const renderGlow = (canvas, ctx)=>{
        ctx.save();
        ctx.filter = 'blur(8px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.filter = 'blur(4px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    const renderToScreen = (canvas, ctx)=>{
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    const handleResize = ()=>{
        const canvas = canvasRef.current;
        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        if (canvas && ctx) {
            resize(canvas, ctx);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Vortex.useEffect": ()=>{
            setup();
            window.addEventListener('resize', handleResize);
            return ({
                "Vortex.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                    }
                }
            })["Vortex.useEffect"];
        }
    }["Vortex.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('\x72\x65\x6c\x61\x74\x69\x76\x65\x20\x68\x2d\x66\x75\x6c\x6c\x20\x77\x2d\x66\x75\x6c\x6c', props.containerClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                ref: containerRef,
                className: "\\x61\\x62\\x73\\x6f\\x6c\\x75\\x74\\x65\\x20\\x69\\x6e\\x73\\x65\\x74\\x2d\\x30\\x20\\x7a\\x2d\\x30\\x20\\x66\\x6c\\x65\\x78\\x20\\x68\\x2d\\x66\\x75\\x6c\\x6c\\x20\\x77\\x2d\\x66\\x75\\x6c\\x6c\\x20\\x69\\x74\\x65\\x6d\\x73\\x2d\\x63\\x65\\x6e\\x74\\x65\\x72\\x20\\x6a\\x75\\x73\\x74\\x69\\x66\\x79\\x2d\\x63\\x65\\x6e\\x74\\x65\\x72\\x20\\x62\\x67\\x2d\\x74\\x72\\x61\\x6e\\x73\\x70\\x61\\x72\\x65\\x6e\\x74",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                    lineNumber: 640,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                lineNumber: 630,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('\x72\x65\x6c\x61\x74\x69\x76\x65\x20\x7a\x2d\x31\x30', props.className),
                children: props.children
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                lineNumber: 646,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
        lineNumber: 623,
        columnNumber: 1
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Vortex, "u6RxWNIDP7LWPylFGjzRL64/Ovw=");
_c = Vortex;
var _c;
__turbopack_context__.k.register(_c, "Vortex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ScrollProgress = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s((param, ref)=>{
    let { className, ...props } = param;
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-x-0 top-16 lg:top-20 z-50 h-[2px] origin-left bg-gradient-to-r from-[#E4572E] via-[#E74D24] to-[#FFD700]', className),
        style: {
            scaleX: scrollYProgress
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "SB+WySA6DCLShNFgg9iAVdr4LlM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
})), "SB+WySA6DCLShNFgg9iAVdr4LlM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
});
_c1 = ScrollProgress;
ScrollProgress.displayName = 'ScrollProgress';
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollProgress$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/common/Loading.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/vortex.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Loading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "100vw",
            height: "100vh"
        },
        className: "jsx-20f1873ed02b568f" + " " + "fixed inset-0 w-screen h-screen z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "20f1873ed02b568f",
                children: "::-webkit-scrollbar{display:none}html.jsx-20f1873ed02b568f,body.jsx-20f1873ed02b568f{overflow:hidden}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-[60]"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 31,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vortex"], {
                backgroundColor: "#000000",
                rangeY: 400,
                particleCount: 250,
                baseSpeed: 0.1,
                rangeSpeed: 1.0,
                baseRadius: 0.5,
                rangeRadius: 3,
                baseHue: 120,
                className: "flex items-center justify-center w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-20f1873ed02b568f" + " " + "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-20f1873ed02b568f" + " " + "relative mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "text-6xl md:text-8xl font-airstrike-bold text-white tracking-wider drop-shadow-2xl",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                delay: 0.2
                                            },
                                            children: "ASTRON"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "text-xl md:text-2xl font-orbitron-semi text-[#E4572E] tracking-[0.3em] mt-2 drop-shadow-lg",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                delay: 0.4
                                            },
                                            children: "ENDURANCE"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-px bg-gradient-to-r from-transparent via-[#E4572E] to-transparent mx-auto shadow-lg shadow-[#E4572E]/50",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: "300px"
                                    },
                                    transition: {
                                        duration: 2.5,
                                        delay: 0.6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "w-80 mx-auto mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-20f1873ed02b568f" + " " + "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-20f1873ed02b568f" + " " + "h-1 bg-gray-800 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "h-full bg-gradient-to-r from-[#E4572E] to-[#FFD700]",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: "100%"
                                                },
                                                transition: {
                                                    duration: 2.5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -top-1 h-3 w-6 bg-[#E4572E] blur-md opacity-70",
                                            animate: {
                                                x: [
                                                    0,
                                                    320,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 2.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-4 text-center",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-white/70 font-orbitron-semi text-sm tracking-wide",
                                        animate: {
                                            opacity: [
                                                0.5,
                                                1,
                                                0.5
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity
                                        },
                                        children: "POWERED BY NATURE"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "relative w-32 h-32 mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 border border-[#E4572E]/30 rounded-full",
                                    animate: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-1 left-1/2 w-2 h-2 bg-[#E4572E] rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-4 border border-[#FFD700]/40 rounded-full",
                                    animate: {
                                        rotate: -360
                                    },
                                    transition: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-1 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-8 border border-white/20 rounded-full",
                                    animate: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-0.5 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    animate: {
                                        scale: [
                                            1,
                                            1.1,
                                            1
                                        ],
                                        opacity: [
                                            0.7,
                                            1,
                                            0.7
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "w-3 h-3 bg-gradient-to-r from-[#E4572E] to-[#FFD700] rounded-full shadow-lg shadow-[#E4572E]/50"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "absolute inset-0 pointer-events-none",
                            children: [
                                ...Array(6)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute w-1 h-1 bg-[#E4572E] rounded-full",
                                    style: {
                                        left: "".concat(20 + i * 15, "%"),
                                        top: "".concat(30 + i % 2 * 40, "%")
                                    },
                                    animate: {
                                        y: [
                                            0,
                                            -20,
                                            0
                                        ],
                                        opacity: [
                                            0,
                                            1,
                                            0
                                        ],
                                        scale: [
                                            0.5,
                                            1,
                                            0.5
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut"
                                    }
                                }, i, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute bottom-16 left-1/2 transform -translate-x-1/2",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 1.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-20f1873ed02b568f" + " " + "text-white/50 font-orbitron-semi text-xs tracking-widest",
                                children: "ENGINEERING A SOLAR FUTURE"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 32,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loading;
const SimpleLoading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col items-center justify-center bg-black text-center select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-[60]"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.85,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                className: "mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/astron_logo_icon.svg",
                        alt: "Astron Endurance Logo",
                        fill: true,
                        priority: true,
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "font-airstrike-bold text-[clamp(2.8rem,10vw,6rem)] leading-none text-white tracking-wide",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.25,
                            duration: 0.6
                        },
                        style: {
                            letterSpacing: "0.05em"
                        },
                        children: "ASTRON"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "font-orbitron-semi text-[clamp(1.1rem,3.2vw,2.4rem)] text-gray-200 tracking-[0.35em] mt-0",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4,
                            duration: 0.6
                        },
                        children: "ENDURANCE"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex items-center justify-center gap-3",
                "aria-label": "Loading",
                role: "status",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "w-3 h-3 rounded-full bg-[#E4572E] shadow-[0_0_6px_-1px_rgba(228,87,46,0.8)]",
                        initial: {
                            scale: 0.6,
                            opacity: 0.3
                        },
                        animate: {
                            scale: [
                                0.6,
                                1,
                                0.6
                            ],
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.22
                        }
                    }, i, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SimpleLoading;
const __TURBOPACK__default__export__ = SimpleLoading;
var _c, _c1;
__turbopack_context__.k.register(_c, "Loading");
__turbopack_context__.k.register(_c1, "SimpleLoading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=astron-endurance-main_src_641d0779._.js.map