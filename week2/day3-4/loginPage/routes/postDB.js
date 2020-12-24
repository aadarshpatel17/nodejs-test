const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/loginPage', { useNewUrlParser: true, useUnifiedTopology: true })

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postData: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: (new Date(Date.now()).toDateString())
    }
})

var postModel = mongoose.model('posts', postSchema)

module.exports = postModel