var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ProductDetail', {useNewUrlParser: true, useUnifiedTopology: true});

var productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

var productModel = mongoose.model('products', productSchema)

module.exports = productModel;