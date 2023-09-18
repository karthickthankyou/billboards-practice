/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'placehold.co',
      'images.unsplash.com',
      'res.cloudinary.com',
    ],
  },
}

module.exports = nextConfig
