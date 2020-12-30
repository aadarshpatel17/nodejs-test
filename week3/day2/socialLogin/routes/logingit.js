const express = require('express');
// const { request } = require('superagent')

const router = express.Router()

// let code = '';

router.get('/profile', (req, res) => {
    const { query } = req;
    const { code } = query;

    if(!code) {
        return res.send({
            success: false,
            message: 'ERROR: NO CODE!   '
        })
    }

    res.send('SUCCESSFUL ' + code)
})

router.post('https://github.com/login/oauth/access_token', (req, res) => {
    send({ 
        client_id: 'e2b5006f1a0f110f475bManny',
        client_secret: '5ed1830b4c853c255630a26ed0d5daaf81440d1d',
        code: req.params.code
    })
    .set('accept', 'application/json')
    .then(function(res) {
        const data = res.body
        console.log(data);
    })
})

module.exports = router;