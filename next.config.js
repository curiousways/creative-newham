/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: "https://www.creativenewham.com",
    SITE_TITLE:
      "Creative Newham - arts, cultural, educational, social and voluntary organisations",
    GOOGLE_ANALYTICS_ID: "G-JQL4063Y0E",
    DATOCMS_API_TOKEN: "2be61068b517de07fc7c8b8a5a27a5",
  },
  images: {
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
