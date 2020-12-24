var express = require('express')
var bodyParser = require('body-parser')
var followModule = require('../routes/followDB')
const { urlencoded } = require('body-parser')
var router = express.Router()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// router.post('/',urlencodedParser, (req, res, next) => {

// })

module.exports = router;