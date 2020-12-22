var Emitter = require('events')

var emtr = new Emitter()

emtr.on('greet', function() {
    console.log('Hello World!')
})

emtr.on('greet', function() {
    console.log('Hello World!!')
})

emtr.emit('greet')