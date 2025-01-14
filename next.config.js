/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Add this for static export
  basePath: '/drug-cards', // Add this - should match your repository name
  images: {
    unoptimized: true // Add this for static export
  }
}

module.exports = nextConfig