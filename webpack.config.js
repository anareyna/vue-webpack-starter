const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const perfil = 'concessionaire'

const pathUrlPerfil = `./src/concessionaire/config/${perfil}.ini.js`

const paths = require(pathUrlPerfil)

const neoautoWebUrl = path.resolve(__dirname, './../../../../')

const version = process.env.version ? (new Date()).valueOf().toString() : '[hash]'

const extractStyles = new ExtractTextPlugin('[name].css?v=' + version)

process.noDeprecation = true

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  entry: {
    main: './src/concessionaire/concessionaire.main.ts',
    vendor1: ['vue', 'vuex', 'vue-router', 'axios']
  },
  output: {
    path: `${neoautoWebUrl}/public/neoauto3/public/static/dashboard/${perfil}/`,
    publicPath: `${paths[process.env.NODE_ENV].staticUrl}${perfil}/`,
    filename: '[name].js?v=' + version
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractStyles.extract({
          use: [
            {
              loader: 'css-loader'
            }
          ],
          fallback: 'style-loader',
          allChunks: true
        })
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: 'vue-style-loader!css-loader!stylus-loader?paths=src/'
          },
          esModule: true
        }
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
                // loaders: ['eslint-loader'],
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
                    // Emit errors instead of warnings (default = false)
          error: false,
                    // other config options to be passed through to standard e.g.
          parser: 'babel-eslint'
        }
      },
      {
        test: /(fonts|img)\/.*\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /icons\/.*\.svg$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
                { removeDimensions: true }
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.ts', '.vue', 'css'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8020,
    quiet: true,
    proxy: {
      '/': {
        target: 'http://local.neoauto3.com',
        changeOrigin: true
      }
    }
  },
  performance: {
    hints: false
  },
    // devtool: '#eval-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        default: {
          use: [require('rupture')()]
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: `${neoautoWebUrl}/application/modules/micuenta/views/scripts/index/index.phtml`
    }),
    new FriendlyErrorsPlugin(),
    extractStyles
  ]
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'pre') ? '"production"' : `"${process.env.NODE_ENV}"`,
      NODE_PATHS: `'${JSON.stringify(paths[process.env.NODE_ENV])}'`
    }
  })
])

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'pre') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
