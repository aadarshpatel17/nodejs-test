var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pdf', (req, res) => {
  res.render('pdf', { title:'PDF' })
})

router.get('/excel', (req, res) => {
  res.render('excel', { title:'EXCEL' })
})

module.exports = router;
