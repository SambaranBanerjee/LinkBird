/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['drizzle-orm'], // ✅ updated key
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
