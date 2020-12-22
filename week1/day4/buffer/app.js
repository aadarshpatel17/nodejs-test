var string = 'hello'

var buffer = new Buffer(string, 'utf8')

// console.log(buffer)
// console.log(buffer.toJSON())

// var data = buffer.toJSON().data
// data.forEach(function(item) {
//     console.log(item)
// })

buffer.write('Tony')

console.log(buffer.toString())

// console.log(new Buffer('Hello', 'utf8'))