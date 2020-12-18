// lecture 17
function greet() {
    console.log('Greeting you!')
}
// greet()

function greeting() {
    console.log('Greeting function called here!')
}

var logG = function() {
    console.log('logG variable called here!')
}

const logGreet = function(fn){
    fn()
    console.log('logGreet variable called here!')
}

// calling functions here
greet()
greeting()
logG()
logGreet(greeting)