/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: "https://www.creativenewham.com",
    SITE_TITLE: "Creative Newham",
    FATHOM_ANALYTICS_ID: "TPQFBBUO",
  },
  images: {
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
