var express = require('express')
var userModule = require('../routes/loginDB')
var router = express.Router()

//checking username existence
isUserNameExist = (req, res, next) => {
  var username = req.body.username

  var password = req.body.password

  var checkName = userModule.findOne({ username: username, password: password})

  checkName.exec((err, data) => {
    if(err) throw err;
    if(data) return res.render('homePage', { title: 'Welcome to Home Page', data: ''})
    else 
      return res.render('index', { title: 'Login Page', msg: 'Invalid Credentials!'})
  })
  next()
}

// Get index page
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Login Page', msg: ''})
})

// Post homepage page after validation
router.post('/',isUserNameExist, (req, res, next) => {
  var userDetail = userModule.find({ status: 1, username: { $ne: req.body.username} })

  userDetail.exec((err, data) => {
      if(err) throw err;
      if(data) {
          var user = []
          for(let i=0; i<data.length; i++)
              user.push(data[i].username.toUpperCase())
          
          var name = req.body.username
          name = name.toUpperCase()

          return res.render('homePage', { title: `${name}`, data: user })
      }
  })
})

module.exports = router;  