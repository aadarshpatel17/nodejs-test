var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    var obj = {
        firstName: 'Tony',
        lastName: 'Stark'
    }
    res.end(JSON.stringify(obj))
}).listen(1337, '127.0.0.1')