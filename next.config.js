/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com', 'image.pollinations.ai'],
  },
}

module.exports = nextConfig
