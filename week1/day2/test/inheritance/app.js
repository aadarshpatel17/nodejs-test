// var Emitter = require('events')
// var util = require('util')

// function greetR() {
//     this.greeting = 'greeting!!!'
// }

// util.inherits(greetR, Emitter);

// greetR.prototype.greet = function() {
//     console.log(this.greeting)
//     this.emit('greet')
// }

// var greeter1 = new greetR();

// greeter1.on('greet', function() {
//     console.log('Someone Greeting!!!')
// })

// greeter1.greet()


var Emitter = require('events')
var util = require('util')

function person() {
    this.firstName = 'Tony'
    this.lastName = 'Stark'
}

function policeMen() {
    person.call(this)
    this.bagdeNumber = '12312'
}

person.prototype.greet = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}

util.inherits(policeMen, person)

var officer = new policeMen();
officer.greet()