var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Product Detail' });
});

router.post('/', function(req, res, next) {
  res.render('addProduct', { title: 'Add New Product' })
});

module.exports = router;
