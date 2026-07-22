const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const modoDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: modoDev ? 'development' : 'production',

    entry: './src/index.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 9000,
        open: true
    },

    optimization: {
        minimize: !modoDev,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/index.html',
                    to: 'index.html'
                },
                {
                    from: 'src/imgs',
                    to: 'imgs',
                    noErrorOnMissing: true
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|otf|eot|woff2?|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}