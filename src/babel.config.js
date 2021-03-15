module.exports = {
  presets: [
    ['@babel/preset-env'],
    [
      '@babel/preset-react',
      {
        'typescript': true
      }
    ],
    [
      '@babel/preset-typescript',
      {
        'isTSX': true,
        'allExtensions': true
      }
    ],
    ['minify']
  ]
};