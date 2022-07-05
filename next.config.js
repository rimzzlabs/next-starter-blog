/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // below resolve module not found on fs module
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      }
    }
    return config
  }
  // above resolve module not found on fs module
  // if you want to use external image, for example from unsplash, you need to set the images property and add to it the url of the image, uncomment the following line.
  // more info: on https://nextjs.org/docs/basic-features/image-optimization#domains
  // images: ['images.unsplash.com']
}

module.exports = nextConfig
