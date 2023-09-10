/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.webm$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },

  reactStrictMode: true,

  swcMinify: true,
};

module.exports = nextConfig;

const path = require("path");
