module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ];

  const plugins =
    process.env.NODE_ENV === 'test'
      ? [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ]
      : [];

  return {
    presets,
    plugins,
  };
};
