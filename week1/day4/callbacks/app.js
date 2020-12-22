//callbacks

function greet(callbacks) {
    console.log('greeting fn excuted!')
    callbacks()
}

function callbacks() {
    console.log('callbacks excuted!')
}

greet(callbacks)