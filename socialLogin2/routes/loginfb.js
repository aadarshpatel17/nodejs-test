const express = require('express');
const router = express.Router()

const passport = require('passport')

const session = require('express-session')

const facebookStrategy = require('passport-facebook').Strategy

router.get('/', (req, res) => {
    res.render('loginfb')
})

module.exports = router;