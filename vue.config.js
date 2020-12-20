let webpack = require('webpack')

module.exports = {
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
