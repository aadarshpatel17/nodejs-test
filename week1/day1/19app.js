var greet = require('./18greet')


var person = {
    firstName: 'Aadarsh',
    lastName: 'Patel',
    greet: function() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`)
    }
}

// person.greet()
// console.log(person['firstName']);
// console.log(greet() + " " + person['firstName']);



