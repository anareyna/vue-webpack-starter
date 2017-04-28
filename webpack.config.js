var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test    : /\.vue$/,
        loader  : 'vue-loader',
        options : {
          loaders : {
              'stylus': 'vue-style-loader!css-loader!stylus-loader'
          }
          // other vue-loader options go here
        }
      },
      {
        test    : /\.js$/,
        loader  : 'babel-loader',
        exclude : /node_modules/
      },
      /*{
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }*/
      {
        test : /\.(jpe?g|png|gif)$/i,
        use  : [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      {
        test : /\.svg$/,
        use  : [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle      : true},
                {convertColors    : {shorthex : false}},
                {convertPathData  : false},
                {removeDimensions : true}
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
