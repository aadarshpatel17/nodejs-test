// Object properties and methods

var obj = {
    greet: 'Hello World!'
}

console.log(obj.greet)
console.log(obj['greet'])
var prop = 'greet'
console.log(obj[prop])


//array and functions
var arr = []

arr.push(function() {
    console.log('Hello 2')
})
arr.push(function() {
    console.log('Hello 3')
})
arr.push(function() {
    console.log('Hello 4')
})

arr.forEach(function(item) {
    item()
})