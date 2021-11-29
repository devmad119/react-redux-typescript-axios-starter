const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '/*': path.resolve(__dirname, 'src/*'),
      'app/*': path.resolve(__dirname, 'src/app/*'),
      'containers/*': path.resolve(__dirname, 'src/containers/*'),
    },
  };

  return config;
};
