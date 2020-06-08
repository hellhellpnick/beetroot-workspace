module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '~@/scss/core.scss';`
      }
    }
  }
}