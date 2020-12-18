'use strict';

class Person {
    constructor() {
        this.firstName = 'Tony'
        this.lastName = 'Stark'
    }

    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}. Your badge-no is ${this.badgeNumber}.`)
    }
}

class PoliceMen extends Person {
    constructor() {
        super()
        this.badgeNumber = 123
    }
}

var officer = new PoliceMen()

officer.greet()