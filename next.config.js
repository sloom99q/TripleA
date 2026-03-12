/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Optimize images
  images: {
    domains: ["triple-a.ae", "framerusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },

  // Webpack configuration for additional optimizations
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
