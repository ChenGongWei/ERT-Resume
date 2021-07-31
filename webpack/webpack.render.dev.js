/**
 * 渲染进程开发配置
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    entry: { // 渲染进程的入口文件
        index: path.resolve(__dirname, '../app/renderer/app.jsx'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: '127.0.0.1', // webpack-dev-server 启动时要指定ip，直接通过localhost启动会报错
        port: 7001, // 启动端口
        hot: true, // 热更新
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 以此文件为模板，自动生成 HTML文件
            template: path.resolve(__dirname, '../app/renderer/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html'),
            chunks: ['index'],
        }),
    ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);