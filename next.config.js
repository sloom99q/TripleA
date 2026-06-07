/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Transpile Mantine + icons packages for proper Next.js bundling
  transpilePackages: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],

  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],
  },

  // Optimize images
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "triple-a.ae" },
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Webpack configuration for additional optimizations
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
