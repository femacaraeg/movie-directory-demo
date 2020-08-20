module.exports = {
  entry: 'src/index',
  plugins: [
    {
      resolve: '@poi/plugin-pwa'
    }
  ],
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
  babel: {
    configFile: true,
  },
}
