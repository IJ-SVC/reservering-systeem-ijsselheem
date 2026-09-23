import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Memory optimization
  experimental: {
    workerThreads: false,
    cpus: 1,
  }};

export default nextConfig;
