const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
var express = require('express')
var bodyParser = require('body-parser');
const { pathToFileURL } = require('url');

var app = express()

app.use(express.static('public'))

var port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/users', (req, res) => {
//     res.send('User Database Accessed! POST')
// })

// app.get('/users/:id?', (req, res) => {
//     if(req.params.id == undefined) {
//         res.send(`All User Database Accesssed!`)
//     } else {
//         res.send(`User Database Accessed!: ${req.params.id}`)
//     }
// })

// app.get('/flights/:from?.:to?', (req, res) => {
//     if(req.params.from == undefined || req.params.to == undefined)
//         res.send('All flight data accessed!')
//     else
//         res.send(`From: ${req.params.from} - To: ${req.params.to}`)
// })

// app.get('/ab+cd', (req, res) => {
//     res.send('hello world')
// })
// not working





// writting middlewares
// var requestTime = (req, res, next) => {
//     req.requestTime = Date.now();
//     next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//     var responseText = '<h1> Hello World </h1>'
//     responseText += `<small> requested at: ${req.requestTime} </small>`
//     res.send(responseText)
// })

// var validation = (req, res, next) => {
//     if(req.params.name == undefined)
//         res.send('Try Again!')
//     else
//         res.send(`<h1> Hello, ${req.params.name}! <br/> Your are on Home Page!</h1>`)
//     next()
// }

app.get('/',(req, res) => {
    console.log('Home Page');
    var responseText = '<h1> Hello World </h1>'
    res.send(responseText)
})

// app.get('/users/:name?', validation, (req, res) => {
//     console.log('user validated!');
// })



app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})