/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  distDir: process.env.BUDCOR_BUILD_DIR || ".next",
};

module.exports = nextConfig;
