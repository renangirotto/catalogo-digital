module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `
            @import "@/scss/_app.scss";
            `
        }
      }
    }
  };