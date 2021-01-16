const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');


const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: isDev ? ['./src/index.tsx', 'webpack-plugin-serve/client'] : './src/index.tsx',
    mode: isDev ? 'development' : 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'components': path.resolve(__dirname, './src/components'),
            'pages': path.resolve(__dirname, './src/pages'),
            'helpers': path.resolve(__dirname, './src/helpers'),
            'assets': path.resolve(__dirname, './src/assets'),
            'styles': path.resolve(__dirname, './src/styles'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.woff(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff',
                    },
                },
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2',
                    },
                },
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2',
                    },
                },
            },
            {
                test: /\.(otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.ttf(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/octet-stream',
                    },
                },
            },
            {
                test: /\.svg(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'assets/[name].[ext]',
                        mimetype: 'image/svg+xml',
                    },
                },
            },
            {
                test: /\.(png|jpg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'assets/[name].[ext]',
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        port: 4000
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: !isDev ? 'bundle.[contenthash].js' : 'bundle.js',
        publicPath: '/'
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.NamedModulesPlugin(),
        isDev && new ReactRefreshWebpackPlugin()
        // isDev && new Serve({
        //   hmr: true,
        //   historyFallback: true,
        //   static: [resolve(__dirname, 'dist')],
        // })

    ].filter(Boolean),
}