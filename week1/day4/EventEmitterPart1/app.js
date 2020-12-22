const EventEmitter = require('./emitter')
var EventsEmitter = require('./emitter')

var events = new EventEmitter()

events.on('greet', function() {
    console.log('Hello World!')
})

events.on('greet', function() {
    console.log('Hello World!!')
})

events.emit('greet')