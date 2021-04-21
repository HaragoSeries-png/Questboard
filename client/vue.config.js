
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer:{
    proxy:{
      "^/api": {
        target: "https://questboard-server.herokuapp.com/",
        pathRewrite: { "^/api": "/api" },
        changeOrigin: true,
        logLevel: "debug"
      }
    }
  },

 
}