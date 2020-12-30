var router = require('express').Router();
var userModel = require('../model/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Page' });
});

//login
router.post('/', function(req, res, next) {

  var verifyUser = userModel.find({$and: [{username: req.body.username}, {password: req.body.password}]})

  verifyUser.exec(function(err, data) {
    var id;
    if(err) throw err;
    data.map((d) => {
      id = d._id;
      data = d.products;
    })
    res.render('homepage', { title: 'Home Page', records: data, id: id })
  })

})

module.exports = router;
