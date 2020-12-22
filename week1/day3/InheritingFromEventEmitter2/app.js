var util = require('util')

function Person() {
    this.firstName = 'Tony'
    this.lastName = 'Stark'
}

Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}. Your badge-no is ${this.badgeNumber}.`)
}

function PoliceMen() {
    Person.call(this)
    this.badgeNumber = 123;
}

util.inherits(PoliceMen, Person)

var officer = new PoliceMen()

officer.greet()
