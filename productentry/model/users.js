const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ProductEntry', { useNewUrlParser: true, useUnifiedTopology: true });

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
    products: [
        {
            name: String,
            desc: String,
            price: Number
        }
    ]
})

var userModel = mongoose.model('users', userSchema)

module.exports = userModel;