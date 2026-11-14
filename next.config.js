/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "knobstud.com" }],
        destination: "https://www.knobstud.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "knobstud.com" }],
        destination: "https://www.knobstud.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
