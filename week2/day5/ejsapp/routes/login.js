var express = require('express')

var router = express.Router()

router.get('/', (req, res, next) => {
    res.render('login', { title: 'Login Page', message: 'Currently on Login Page!'})
})

router.post('/', (req, res, next) => {
    res.render('loginHome', { title: 'Login Page Home', message: `Welcome ${req.body.username}. Your are on Login Home Page` } )
})

module.exports = router