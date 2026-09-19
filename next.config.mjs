/** @type {import('next').NextConfig} */
const nextConfig = {
  // ponytail: 拿掉 output:'export' 改用 OpenNext SSR 部署到 Cloudflare Workers
  allowedDevOrigins: ['http://localhost:8081'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

export default nextConfig
