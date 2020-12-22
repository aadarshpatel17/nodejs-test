var Emitter = require('events')

class greetr extends Emitter {
    constructor() {
        super()
        this.greeting = 'Hello,'
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`)
        this.emit('greet', data)
    }
}

var greeter1 = new greetr()

greeter1.on('greet', function(data) {
    console.log(`Someone Greeted! ${data}`)
})

greeter1.greet('Tony')