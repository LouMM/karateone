'use strict';
const html_webpack_plugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//const host = process.env.HOST || '0.0.0.0';

module.exports = async (env, options) => {
    const dev = options.mode === "development";

    const config = {
        mode: "development",
        optimization: {
            minimize: false
            /* minimizer: [
                 new TerserPlugin({
                     terserOptions: {
                         parse: {
                             // we want uglify-js to parse ecma 8 code. However, we don't want it
                             // to apply any minfication steps that turns valid ecma 5 code
                             // into invalid ecma 5 code. This is why the 'compress' and 'output'
                             // sections only apply transformations that are ecma 5 safe
                             // https://github.com/facebook/create-react-app/pull/4234
                             ecma: 8
                         },
                         compress: {
                             ecma: 5,
                             warnings: false
                             // Disabled because of an issue with Uglify breaking seemingly valid code:
                             // https://github.com/facebook/create-react-app/issues/2376
                             // Pending further investigation:
                             // https://github.com/mishoo/UglifyJS2/issues/2011
                             //,comparisons: false
                         },
                         mangle: {
                             safari10: true
                         },
                         output: {
                             ecma: 5,
                             comments: false
                             // Turned on because emoji and regex is not minified properly using default
                             // https://github.com/facebook/create-react-app/issues/2488
                             ,ascii_only: true
                         }
                     },
                     // Use multi-process parallel running to improve the build speed
                     // Default number of concurrent runs: os.cpus().length - 1
                     parallel: true,
                     // Enable file caching
                     cache: true,
                     sourceMap: true
                 })
             ],
             // Automatically split vendor and commons
             // https://twitter.com/wSokra/status/969633336732905474
             // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
             splitChunks: {
                 chunks: 'all',
                 name: false,
             },
             // Keep the runtime chunk seperated to enable long term caching
             // https://twitter.com/wSokra/status/969679223278505985
             runtimeChunk: true,*/
        },
        devtool: "source-map",
        entry: {
            app: ['./src/index.tsx']
        }
        , resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        'ts-loader'
                    ]
                    , exclude: /node_modules/
                },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: {
                        loader: 'file-loader',
                        query: {
                            name: 'src/assets/[name].[ext]'
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        }
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ],
                    exclude: /\.module\.css$/
                }
                , {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ],

        },
        /*// When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },*/
        plugins: [
            new html_webpack_plugin({
                filename: "index.html",
                template: './src/index.html'
                , chunks: ['app']

            },
                new BundleAnalyzerPlugin()
            )
        ],
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            port: process.env.npm_package_config_dev_server_port || 3001
            ,
            // Enable hot reloading server. It will provide /sockjs-node/ endpoint
            // for the WebpackDevServer client so it can learn when the files were
            // updated. The WebpackDevServer client is included as an entry point
            // in the Webpack development configuration. Note that only changes
            // to CSS are currently hot reloaded. JS changes will refresh the browser.
            hot: true
            // Enable HTTPS if the HTTPS environment variable is set to 'true'
            //, https: protocol === 'https'
        }
    }
    return config;
}