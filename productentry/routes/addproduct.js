var router = require('express').Router()
var userModel = require('../model/users')

router.post('/:id', function(req, res, next) {

    var users = userModel.findById(req.params.id)

    res.render('addproduct', { title: "Add New Product" })

    users.exec(function(err, data) {
        if(err) throw err;

        console.log(data);

        // var updateData = {
        //     title: req.body.title,
        //     desc: req.body.desc,
        //     price: req.body.price
        // }

        // var update = data.products.push(updateData)

        // var updateDetail = userModel.findByIdAndUpdate(req.params.id, update)

        // updateDetail.exec(function(err, data) {
        //     if(err) throw err;
        //     console.log(data);
        //     res.render('test', {title:'Test Page'})
        // })
    })

})


module.exports = router;