/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Always serve the site on www (matches the canonical URLs in lib/seo.js).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sobhaparqcity.in" }],
        destination: "https://www.sobhaparqcity.in/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination:
          "https://res.cloudinary.com/djdp6aloi/image/upload/:path*",
      },
    ];
  },
};

export default nextConfig;