/**
 * 主进程开发环境配置
 */
const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');  // 进行 webpack 配置合并

const mainConfig = {
    mode: 'development',    
    entry: path.resolve(__dirname, '../app/main/electron.ts'), // 入口文件
    target: 'electron-main', // https://webpack.js.org/configuration/target/#target
    output: {
        filename: 'electron.js', // 打包后的文件名
        path: path.resolve(__dirname, '../dist'), // 打包出来的文件目录
    },
    devtool: 'inline-source-map',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);