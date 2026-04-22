import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/writer",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
