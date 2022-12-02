/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  env: {
    GOOGLE_MAPS_API_KEY:
      process.env.GOOGLE_MAPS_API_KEY,
      SEND_GRID_API_KEY:
      process.env.SEND_GRID_API_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
