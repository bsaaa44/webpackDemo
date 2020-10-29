const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        index: './src/index.js',
        // another: './src/another-module.js'
    },
    
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name(modules,chunks,cacheGroupKey){
                        const moduleFileName = module.identifier().split('/').reduceRight(item => item);
                        const allChunksNames = chunks.map((item) => item.name).join('~');
                        return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    },
                    chunks: 'all'
                }
            }
        }
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: 'commons',
    //                 chunks: 'initial',
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        new CleanWebpackPlugin()
    ],
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // mode: "production",
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]
    // }
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
}