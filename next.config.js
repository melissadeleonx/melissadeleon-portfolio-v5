// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['user-images.githubusercontent.com'],
//   },
//   experimental: {
//     appDir: false,
//   },
// };

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '', // Default port (leave empty)
        pathname: '/**', // Adjust the pathname as needed
      },
    ],
  },
  // experimental: {
  //   appDir: false,
  // },
  async headers() {
    return [
      {
        // Set Cache-Control header for static assets (images, etc.)
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

