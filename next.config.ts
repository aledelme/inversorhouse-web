import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2678400,// 31 days
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL.replace('https://', ''),
        pathname: '/**',
      },
    ]
  }
  /* config options here */
};

export default withFlowbiteReact(nextConfig);