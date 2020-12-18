// var http = require('http')
// var fs= require('fs')

// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
// }).listen(1337, '127.0.0.1')

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var jsonParser = bodyParser.json()

port = process.env.PORT || 3000

//using middleware
//adding style-sheet
app.use('/assets', express.static(__dirname + '/public'))

//view-engine
app.set('view engine', 'ejs')

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next()
})

app.get('/', function(req, res) {
    res.render('index')
})

//using variable
app.get('/person/:id', function(req, res) {
    res.render('person', { ID : req.params.id, Qstr: req.query.qstr })
})

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank You!')
    console.log(req.body.firstName);
    console.log(req.body.lastName);
})

app.get('/personjson', jsonParser, function(req, res) {
    res.send('Thank You for JSON data!')
    console.log(req.body.firstName);
    console.log(req.body.lastName);
})

app.get('/api', function(req, res) {
    res.json({
        firstName: 'John',
        lastName: 'Dark',
        age: 12
    })
})

app.listen(port)