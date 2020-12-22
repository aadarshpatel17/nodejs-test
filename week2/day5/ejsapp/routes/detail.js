var express = require('express')
var express = require('express');
var router  = express.Router()

// Get Detail Page 
router.get('/:id?.:pwd?', (req, res, next) => {
    res.render('detail', { title: 'Detail Page ' + req.params.id, message: 'Welcome to the Detail Page! ' + req.params.pwd });
})

module.exports = router