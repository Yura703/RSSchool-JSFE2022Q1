const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // игнорирование расширений в импортах
    resolve: {
        extensions: ['.js', '.ts'],
    },

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(), 
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'img', 'news_placeholder.jpg'),
                    to: path.resolve(__dirname, 'dist', 'img', 'news_placeholder.jpg'),
                },
                {
                    from: path.resolve(__dirname, 'src', 'img', 'favicon96.png'),
                    to: path.resolve(__dirname, 'dist', 'img', 'favicon96.png'),
                },
            ],
        }),       
        //new ESLintPlugin({ extensions: ['ts', 'js'] }),
    ],
};

//const ESLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};