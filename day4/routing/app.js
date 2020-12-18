var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {

    if(req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        fs.createReadStream(__dirname + '/index.json').pipe(res)
    }
    else if(req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }
    else {
        res.writeHead(404)
        res.end("Nothing here!")
    }

}).listen(1337, '127.0.0.1')