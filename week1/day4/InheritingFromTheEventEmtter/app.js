var Emitter = require('events')
var util = require('util')

util.inherits(Person, Emitter)

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.greet = function(bagdeNumber) {
    this.emit('greeting', bagdeNumber)
}

var person1 = new Person('Tony', 'Stark')

person1.on('greeting', function(bagdeNumber ) {
    console.log(`Hello ${this.firstName} ${this.lastName}. Your bagde-no. is ${bagdeNumber}.`)
})

person1.greet('123')


