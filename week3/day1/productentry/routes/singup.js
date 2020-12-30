const router = require('express').Router();
const userModel = require('../model/users')

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup Page', msg:'' })
})

//signup
router.post('/', function(req, res, next) {

    var newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save(function(err, data) {
        if(err) throw err
        res.render('signup', { title: 'Signup Page', msg:'Registered Successfully!' })
    })
})

module.exports = router;