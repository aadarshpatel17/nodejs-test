var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The World', message: 'Welcome to the Express JS Dummy App!' });
});

module.exports = router;
