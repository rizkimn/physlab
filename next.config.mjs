/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.join(process.cwd(), 'public/assets');
    return config;
  }
};

export default nextConfig;
