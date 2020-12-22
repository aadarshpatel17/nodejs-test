// var http = require('http')
// var fs= require('fs')

// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
// }).listen(1337, '127.0.0.1')

var express = require('express')
const { CLIENT_RENEG_LIMIT } = require('tls')
var app = express()

port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1 class=heading>Hello World Again!</h1><body></html>')
})

//using middleware
//adding style-sheet
app.use('/assets', express.static(__dirname + '/public'))

//
app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next()
})

//using variable
app.get('/person/:id', function(req, res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1 class=heading>Person: ${req.params.id} </h1><body></html>`)
})

app.get('/api', function(req, res) {
    res.json({
        firstName: 'Tony',
        lastNameL: 'Stark',
        age: 12        
    })
})

app.listen(port)