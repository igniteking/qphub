const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home", // Redirecting to /home
        permanent: true, // 301 Redirect
      },
    ];
  },
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
  basePath: "", // Default is an empty string
  assetPrefix: "", // Default is an empty string
};

export default nextConfig;
