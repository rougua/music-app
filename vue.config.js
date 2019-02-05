const path = require('path')

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, 'src/common/styles')]
      }
    }
  }
}
