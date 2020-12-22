var Emitter = require('./emitter')

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('first!!!')
})

emtr.on('greet', function() {
    console.log('second!!!')
})

console.log('start here!')
emtr.emit('greet');