/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  env: {
    GOOGLE_MAPS_API_KEY:
      process.env.GOOGLE_MAPS_API_KEY,
      SENDGRID_API_KEY:
      process.env.SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
