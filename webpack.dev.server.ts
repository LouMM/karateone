import webpack from "webpack";
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.ts");

new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,  // enable hot reloading
    publicPath: config.output.publicPath,
    headers: {
        "Access-Control-Allow-Origin": "*"
        // Enable HTTPS if the HTTPS environment variable is set to 'true'
        //, https: protocol === 'https'
    }
}).listen(3001, "localhost", (err: any, result: any) => {
    if (err) {
        return console.log(err);
    }
});