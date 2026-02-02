import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable Next.js 16 Cache Components
  cacheComponents: true,

  // 2. Authorize Spotify Image Servers
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
    ],
  },
};

export default nextConfig;