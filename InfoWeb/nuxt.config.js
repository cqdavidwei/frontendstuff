module.exports = {
    build: {
      vendor: ['element-ui'],
      extend (config, {isClient}){
        if (isClient)
          config.devtool = 'eval-source-map'
        else
          config.devtool = "inline-source-map"
      }
    },
    env: {
      serviceBaseUrl: 'http://10.2.56.38:8080'
    },
    css:['~assets/css/global.css'],
    plugins: ['./plugins/element-ui']
  }