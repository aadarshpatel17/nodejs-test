function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.greet = function(){
    console.log(`Hello, ${this.firstName} ${this.lastName}!`)
}

var aadarsh = new Person('Aadarsh', 'Patel')
var jane = new Person('Jane', 'Doe')

// console.log(myName.firstName +" "+ myName.lastName)
// aadarsh.greet()
// jane.greet()

console.log(aadarsh.__proto__)
console.log(jane.__proto__)


console.log('John'.split(''));

