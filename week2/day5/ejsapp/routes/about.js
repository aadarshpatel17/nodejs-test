var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router()

router.use(bodyParser.urlencoded( { extended: false }))

router.use(bodyParser.json())

// Get About Page
router.get('/', (req, res, next) => {
    res.render('about', {title: 'Fill The Login Form: ', sum: req.params.a + req.params.b})
})

router.post('/', (req, res, next) => {
    var a = parseInt(req.body.first);
    var b = parseInt(req.body.second);
    res.render('welcome', {title: 'Login Page', message: 'Welcome to Login Page!', sum: a + b, sub: a - b, multi: a * b, division: a / b})
})

module.exports = router