/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // change library from react to preact when in production
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
      return config
    }
  }
}

module.exports = nextConfig
