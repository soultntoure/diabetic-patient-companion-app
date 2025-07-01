/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const { IS_ANDROID, IS_IOS } = require('react-native-get-build-info');
  const config = await getDefaultConfig();
  const { assetExts } = config.resolver;
  return {
    ...config,
    transformer: {
      ...config.transformer,
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: !IS_ANDROID && !IS_IOS, // Performance optimization for release builds
        },
      }),
    },
    resolver: {
      ...config.resolver,
      assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'svg'], // Add svg if needed
    },
  };
})();
