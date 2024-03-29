const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    'ace-reports': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader', 
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  }, 
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js'
    },
    extensions: [ '.tsx', '.ts', '.js', '.vue', '.json' ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
