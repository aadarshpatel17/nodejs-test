var Emitter = require('events');
const { CLIENT_RENEG_LIMIT } = require('tls');
var eventConfig = require('./config')

var emtr = new Emitter();

// console.log(emtr)

emtr.on(eventConfig.GREET, function() {
    console.log('first!!!')
})

emtr.on(eventConfig.GREET, function() {
    console.log('second!!!')
})

emtr.emit('greet');