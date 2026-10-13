/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot",
      "motion"
    ],
  },
  onDemandEntries: {
    maxInactiveAge: 20 * 1000,
    pagesBufferLength: 2,
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Memory optimization: prevent massive chunks and reduce dev memory overhead
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  }
};

export default nextConfig;
