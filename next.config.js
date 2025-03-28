/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // This is good for static export
  basePath: process.env.VERCEL ? '' : '/drug-cards', // Conditional basePath
  assetPrefix: process.env.VERCEL ? '' : '/drug-cards', // Also add assetPrefix
  images: {
    unoptimized: true // This is good for static export
  }
}
module.exports = nextConfig
