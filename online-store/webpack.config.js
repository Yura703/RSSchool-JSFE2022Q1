const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        //assetModuleFileName: 'assets/[name][ext]'
    },

    mode: 'development',

    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                            progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                            enabled: false,
                            },
                            pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                            },
                            gifsicle: {
                            interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                            quality: 75
                            }
                        }
                    }
                ],
                type: 'asset/resource',                
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                //include: paths,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                'src/styles/vars.scss',
                            ]
                        }
                    }
                ]
            }
        ],
    },

    // игнорирование расширений в импортах
    resolve: {
        extensions: ['.js', '.ts'],
    },

    

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(), 
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets', 'images'),
                    to: path.resolve(__dirname, 'dist/assets', 'images'),
                },
                // {
                //     from: path.resolve(__dirname, 'src/assets', 'images', '2.jpg'),
                //     to: path.resolve(__dirname, 'dist/assets', 'images', '2.jpg'),
                // },
                // {
                //     from: path.resolve(__dirname, 'src/assets', 'images', '3.jpg'),
                //     to: path.resolve(__dirname, 'dist/assets', 'images', '3.jpg'),
                // },
                
                // {
                //     from: path.resolve(__dirname, 'src', 'img', 'favicon96.png'),
                //     to: path.resolve(__dirname, 'dist', 'img', 'favicon96.png'),
                // },
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