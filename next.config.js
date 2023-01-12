/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["api.ubdgroup.uz"],
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true
};