'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`)
    }
}

var person1 = new Person('Tony', 'Stark')
var person2 = new Person('Ram', 'Sharma')

person1.greet()
person2.greet()