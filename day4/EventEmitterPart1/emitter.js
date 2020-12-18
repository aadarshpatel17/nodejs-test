// Event Emitter

function EventEmitter() {
    this.events = {}
}

EventEmitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

EventEmitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach((listener) => listener())
    }
}

module.exports = EventEmitter;