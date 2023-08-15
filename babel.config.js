module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          "extensions": [
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json'
          ],
          alias: {
            '@components': './app/components',
            '@screens': './app/screens',
            '@utils': './app/utils',
            '@navigation': './app/navigation',
          }
        }
      ]
    ]
  };
};
