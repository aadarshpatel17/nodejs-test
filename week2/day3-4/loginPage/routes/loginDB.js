const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/loginPage', {useNewUrlParser: true, useUnifiedTopology: true})

// var conn = mongoose.Collection;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index:  {
            unique: true
        }
    },
    email:  {
        type: String,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        require: true
    }
})

var userModel = mongoose.model('users', userSchema)

module.exports = userModel;