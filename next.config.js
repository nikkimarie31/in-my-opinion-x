// next.config.js
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
      };
    }

    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    });

    return config;
  },
};
