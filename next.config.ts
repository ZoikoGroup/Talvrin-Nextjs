import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Request Access moved under /connect; many existing links still use the old URL.
      { source: "/request-access", destination: "/connect/request-access", permanent: true },
    ];
  },
};

export default nextConfig;
