var EventEmitter = require('events')
var util = require('util')

function Person() {
    this.firstName = 'Tony'
    this.lastName = 'Stark'
}

Person.prototype.badgeNumber = function() {
    this.badgeNumber = 1233
    this.emit('greet')
}

util.inherits(Person, EventEmitter)

var person = new Person()

person.on('greet', function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}. Your badge-no. is ${this.badgeNumber}.`)
})

person.badgeNumber();
