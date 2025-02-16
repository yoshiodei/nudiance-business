/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            pathname: "/v0/b/**",
          },
        ],
      },
      output: "standalone",
      reactStrictMode: true,
      pageExtensions: [
        "page.tsx",
        "page.ts",
        // FIXME: Next.js has a bug which does not resolve not-found.page.tsx corretly
        // Instead, use `not-found.ts` as a workaround
        // "ts" is required to resolve `not-found.ts`
        // https://github.com/vercel/next.js/issues/65447
        "ts"
    
      ],
};

export default nextConfig;


