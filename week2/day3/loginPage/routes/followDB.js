var mongoose = require('mongoose')

var followSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    followings: {
        persons: []
    }
})

var followModel = mongoose.model('following', followSchema)

module.exports = followModel;