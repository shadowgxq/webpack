const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    target: "node",
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/main.js"),
        header: path.resolve(__dirname, "src/header.js"),
    },
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     plugins: [
                    //         'autoprefixer',
                    //         {

                    //         }
                    //     ]
                    // },
                    "less-loader",
                ], // 从右向左解析原则
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
            chunks: ["main"],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/header.html"),
            filename: "header.html",
            chunks: ["header"], // 与入口文件对应的模块名
        }),
        new MiniCssExtractPlugin({
            
        })
    ],
};
