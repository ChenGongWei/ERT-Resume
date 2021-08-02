/**
 * 基础公共配置
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    resolve: { // 配置 webpack 如何寻找模块对应的文件
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 导入语句没有后缀时，会带上这里配置的后缀去寻找对应文件
        alias: { // 取别名
            '@src': path.join(__dirname, '../', 'app/renderer'),
            '@assets': path.join(__dirname, '../', 'assets'),
            '@common': path.join(__dirname, '../', 'app/renderer/common'),
        },
    },
    module: { // 打包方案
        rules: [ // 规则
            {
                test: /\.(js|jsx|ts|tsx)/, // 匹配规则
                exclude: /node_modules/, // 排除文件夹
                use: {
                    loader: 'babel-loader', // 使用 babel-loader 对匹配上的文件进行处理
                },
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]__[hash].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()], // 每次打包前删除之前的dist文件
};