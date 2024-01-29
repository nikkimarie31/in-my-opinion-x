const path = require('path');

module.exports = {
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
      test: /\.(node|dll)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'static/',
        publicPath: `/_next/static/`, 
      },
    });

    // For server builds, provide absolute paths to the native modules
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      
        'zstd': path.resolve(__dirname, 'node_modules/@mongodb-js/zstd-win32-x64-msvc/zstd.win32-x64-msvc.node'),
        'snappy': path.resolve(__dirname, 'node_modules/@napi-rs/snappy-win32-x64-msvc/snappy.win32-x64-msvc.node'),
     
      };
    }

    return config;
  },
};
