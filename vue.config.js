let webpack = require('webpack')
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  css: {
    loaderOptions: {
      css: {
        url: false
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
