const { kMaxLength } = require('buffer')
const { timeStamp } = require('console')
var Emitter = require('events')

class Person extends Emitter {
    constructor(firstName, lastName) {
        super()
        this.firstName = firstName
        this.lastName = lastName
    }

    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`)
        this.emit('greet')
    }
}

var person1 = new Person('Tony', 'Stark')

person1.on('greet', function() {
    console.log('Greeted Above!')
})

person1.greet()