module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `
            @import "@/scss/_app.scss";
            `
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/catalogo-digital/' : '/'
  };