/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
          port: '',
          pathname: "/**",
        },
      ],
    },
    experimental: {
      taint: true,
    },
    // ...other config settings
  };
  
  export default nextConfig;