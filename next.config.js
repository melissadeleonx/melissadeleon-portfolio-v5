/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // Configuration for images hosted on external URLs (not needed for local images in `public`)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: '/melissadeleon-portfolio-v5', // GitHub Pages repository name (if served from a subpath)
  assetPrefix: '/melissadeleon-portfolio-v5/', // GitHub Pages repository name (if served from a subpath)
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
};
