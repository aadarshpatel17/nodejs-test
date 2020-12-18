class Person extends Policemen {
    constructor(firstName, lastName) {
        super()
        this.firstName = firstName
        this.lastName = lastName
    }

    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}. Your badge-no. is ${this.badgeNo}.`)
    }
}

function Policemen() {
    this.badgeNo = '1234'
}

var person1 = new Person('Tony', 'Stark')
person1.greet()