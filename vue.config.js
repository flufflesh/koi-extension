module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {}
    }
  },
  chainWebpack: (config) => {
      config.module.rule("images").use("url-loader").loader("url-loader").tap((options) => {
          options.fallback.options.name = "img/[name].[ext]"
          return options
      })
  }
}
