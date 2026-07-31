import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // No `search` field on the blog pattern: allows any query string, since
    // cover images are served with a `?v=<mtime>` cache-busting param (see
    // lib/blog.ts). Every local path rendered via next/image must be listed
    // here explicitly, or Next 16 rejects it.
    localPatterns: [{ pathname: "/images/blog/**" }, { pathname: "/logo-icon.png" }],
  },
};

export default nextConfig;
