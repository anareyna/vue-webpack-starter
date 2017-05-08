var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    entry : './src/main.js',
    output: {
        path      : path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename  : 'build.js'
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
                }
            },
            {
             test: /\.css$/,
             use : ['style-loader', 'css-loader']
            },
            {
                test   : /\.js$/,
                loaders : ['babel-loader'],
                exclude: /node_modules/
            },

            /*{
                test: /\.(js|vue)$/,
                loaders : ['eslint-loader'],
                exclude: /node_modules/
            },*/
            {
                test   : /(fonts|img)\/.*\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use    : [{
                     loader : 'url-loader',
                     options: {
                         limit: 10000
                     }
                 }]
            },
            {
                test: /icons\/.*\.svg$/,
                use : [
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader : 'svgo-loader',
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
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo            : true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new WebpackNotifierPlugin(),
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV : '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress : {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
