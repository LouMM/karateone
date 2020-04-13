delete process.env.BROWSER;

import compression from "compression";
import express from "express";
import * as http from "http";
import path from "path";
let server: any;

const app: express.Application = express(); // delcare application
const env: string = app.get('env')
const PORT = process.env.PORT || 3000;
app.use(compression()); // compress compatible files for quicker client load time
app.use(express.static('dist'))
app.use('/assets', express.static('assets'))
/*
function ensureSecure(req, res, next) {
    if (req.secure) {
        // OK, continue
        return next();
    };
    // handle port numbers if you need non defaults
    // res.redirect('https://' + req.host + req.url); // express 3.x
    res.redirect('https://' + req.hostname + req.url); // express 4.x
}

if (env === 'production') {
    app.all('*', ensureSecure);

if (env === 'production') {
    // If you update src/client/app.tsx, then you MUST update here (production only)
    app.use('/', routeToIndex)
}*/

// create server based on application configuration
server = http.createServer(app);

app.get('/', (req, res) => {
    routeToIndex(req,res);
    //res.send(""); //TODO Add index
});

// start the server listening on specified port
server.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening on port", PORT);
});

function routeToIndex(req: any, res: any) {
    const index: string = './dist/index.html'
    const indexPath = path.join(__dirname, index);
    console.log("index Path", indexPath);
    res.sendFile(indexPath, (err: any) => {
        if (err) res.status(500).send(err)
    })
}