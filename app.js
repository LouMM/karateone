import * as express from 'express'
const app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'tsx')
app.engine('tsx', require('express-react-views').createEngine())
app.get('/', (req, res) => res.render('index', { msg: 'TypeScript + Node = ❤' }))
app.listen(8080)