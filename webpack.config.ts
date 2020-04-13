'use strict';
const html_webpack_plugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import path from 'path';
import webpack, { Stats } from "webpack";

/*if (!["dev", "test", "prod"].some(env => process.env.ENV!.toString() === env)) {
    throw new Error(
        "Environment must be set in the npm script eg. ENV=dev, ENV=test, ENV=prod"
    );
}*/

//const host = process.env.HOST || '0.0.0.0';
const isDevelopment: boolean = process.env.ENV !== "prod";
const webpackConfigBase = (): webpack.Configuration => {
    return {
        mode: isDevelopment ? "development" : "production",
        watch: isDevelopment,
        devtool: isDevelopment ? "inline-source-map" : false,
        optimization: {
            minimize: isDevelopment ? false : true
            , minimizer: [
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
                            , ascii_only: true
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
            runtimeChunk: true,
        }
        , module: {
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
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.html']
        }
    }
}

const webpackConfigServer = (): webpack.Configuration => {
    return {
        ...webpackConfigBase(),
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        entry: {
            server: "./server/server.ts"
        },
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        }
        //,externals: [nodeExternals()]
    }
};

export const webpackConfigClient = (): webpack.Configuration => {
    return {
        ...webpackConfigBase(),
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        entry: {
            client: "./src/index.tsx"
        },
        target: 'web',
        plugins: [
            new html_webpack_plugin({
                filename: "index.html",
                template: './src/index.html'
                , chunks: ['client']
                , excludeChunks: ['server']
            })
        ]
    }
};
//webpackConfigServer(),
webpack([ webpackConfigClient()], (err: Error, stats: Stats) => {
    if (err) {
        console.error(err.stack || err);
        if ((err as any).details) {
            console.error((err as any).details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    // // Log result...
});