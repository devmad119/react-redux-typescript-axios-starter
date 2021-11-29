const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '/*': path.resolve(__dirname, 'src/*'),
      'app/*': path.resolve(__dirname, 'src/app/*'),
      'assets/*': path.resolve(__dirname, 'src/assets/*'),
      'common/*': path.resolve(__dirname, 'src/common/*'),
      'components/*': path.resolve(__dirname, 'src/components/*'),
      'containers/*': path.resolve(__dirname, 'src/containers/*'),
      'context/*': path.resolve(__dirname, 'src/context/*'),
      'hocs/*': path.resolve(__dirname, 'src/hocs/*'),
      'hooks/*': path.resolve(__dirname, 'src/hooks/*'),
      'styles/*': path.resolve(__dirname, 'src/styles/*'),
    },
  };

  return config;
};
