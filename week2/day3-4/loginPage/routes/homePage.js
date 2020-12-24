var express = require('express')
var bodyParser = require('body-parser')
var postModule = require('../routes/postDB')
var router = express.Router()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/',urlencodedParser, (req, res, next) => {

    var sendPost = new postModule({
        username: req.body.title,
        postData: req.body.post,
    })

    sendPost.save((err, data) => {
        if(err) 
            throw err;
        else
            res.render('test',{ title: 'Updated Succussfully!!!', msg: data})
    })
})

module.exports = router;