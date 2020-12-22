var express = require('express');
const { body, validationResult } = require('express-validator')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Login Page', message: "Fill details to Login: ", error: ''})
});

router.post('/', [
  body('username').isEmail(),
  body('password').isLength( {min: 5} )
], (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() })
  }
  res.render('homePage', { title: 'Home Page', message: `Welcome to Home Page ${req.body.username}!`})
})

module.exports = router;
