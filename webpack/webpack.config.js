const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const modoDev = process.env.NODE_ENV !== "production"
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    mode: modoDev ? "development" : "production", // se for modoDev = development, se não, production, config no package.json
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },

  devServer: {
    static: {
        directory: "./public"
    },
    port: 9000,
    client: {
        overlay: {
            errors: true,
            warnings: false
        }
    }
  },

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, // <<essa expressao encontra css, scss e sass
            use: [
                MiniCssExtractPlugin.loader,
               // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
                "css-loader", // interpreta imports, url()...
                "sass-loader"
            ]
        }]
    }
}