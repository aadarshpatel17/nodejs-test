var util = require('util')

function PoliceMen() {
    console.log('SomeOne Greeted!')
    this.rollNo = '1231';
}

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

util.inherits(Person, PoliceMen)

Person.prototype.greet = function(bagdeNumber) {
    PoliceMen.call(this)    
    console.log(`Hello, ${this.firstName} ${this.lastName}. Your badge-no. is ${bagdeNumber} and roll-no. is ${this.rollNo}.`)
}

var person1 = new Person('Tony', 'Stark')

person1.greet('12312')