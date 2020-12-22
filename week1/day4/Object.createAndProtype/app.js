var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`)
    }
}

var person1 = Object.create(person)
person1.firstName = 'Tony'
person1.lastName = 'Stark'
person1.greet()