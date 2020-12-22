// var fs = require('fs')

// var readable = fs.createReadStream(__dirname + '/greet.txt', 'utf8')

// var writable = fs.createWriteStream(__dirname + '/greetCopy.txt')

// readable.on('data', function(chunk) {
//     console.log(chunk)
//     console.log(chunk.length)
//     writable.write(chunk)
// })



var fs = require('fs')

var readable = fs.createReadStream(__dirname + '/greet.txt', 'utf8')

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt')

readable.on('data', function(chunk) {
    writable.write(chunk)
})