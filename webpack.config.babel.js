import webpack from 'webpack';
import path from 'path';
import { PrettierEslintPlugin } from 'prettier-eslint-webpack-plugin';
import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const eslintConfig = fs.readFileSync('.eslintrc');
const LIBS = path.resolve(__dirname, 'libs');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const config = {

    context: path.resolve(__dirname, 'src'),
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        publicPath: '/dist/js',
        contentBase: path.resolve(__dirname)
    },
    resolve: {
        modules: [LIBS, NODE_MODULES],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: [NODE_MODULES],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['latest']
                        ],
                        plugins: ["transform-class-properties"]
                    }
                }]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: {sourceMap: true} }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        css: ExtractTextPlugin.extract('css'),
                        js: 'babel-loader',
                    }
                }
            }


        ]
    },
    plugins: [
            new webpack.LoaderOptionsPlugin({
                vue: {
                    loaders: {
                        scss: 'style!css!sass'
                    }
                }
            })
    ]
};

export default config;