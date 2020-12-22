function Person(callbacks) {
    callbacks('Tony', 'Stark')
    callbacks('Ram', 'Sharma')
}

Person(function(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`)
})