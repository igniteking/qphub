const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // Remove assetPrefix entirely
  basePath: "", // Default is an empty string
  assetPrefix: "", // Default is an empty string
};

export default nextConfig;
