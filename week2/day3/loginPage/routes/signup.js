var express = require('express')
var userModule = require('./loginDB')
var router = express.Router()

// Get signup page
router.get('/', (req, res, next) => {
    res.render('signup', { title: 'Signup Page', msg: ''})
})

// Post signup page after successful registeration
router.post('/', (req, res, next) => {

    var userDetail = new userModule({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
        status: req.body.accountType
    })

    if(req.body.password != req.body.cpassword) 
        res.render('signup', { title: 'Signup Page', msg: 'Both password should be same!'})
    else {
        userDetail.save((err, data) => {
            if(err)
                throw err;
                // res.render('signup', { title: 'Signup Page', msg: 'Username or Email already exist!'})
            else
                res.render('signup', { title: 'Signup Page', msg: 'User Registered Successfully!'})
        })
    }
})

module.exports = router;