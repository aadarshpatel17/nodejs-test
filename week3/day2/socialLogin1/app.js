const cookieParser = require('cookie-parser')
const express = require('express')

//routers
const indexRouter = require('./routes/index')

const app = express()

const PORT = process.env.PORT || 5000

const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '618525950707-sd5ar0mdfc9soquur9asc3evhpn4o5pf.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);


app.set('view engine', 'ejs')
app.use(express.json())
app.use(cookieParser())
app.use('/index', indexRouter)

//GOOGLE LOGIN ROUTES
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/logingoogle', (req, res) => {
    res.render('logingoogle')
})
app.post('/logingoogle', (req, res) => {
    let token = req.body.token
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
    }
    verify()
    .then(() => {
        res.cookie('session-token', token)
        res.send('success')
    }).catch(console.error);
})

//GITHUB LOGIN ROUTES
app.get('/logingit', (req, res) => {
    res.render('logingit')
})
app.post('/logingoogle', (req, res) => {
    let token = req.body.token
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
    }
    verify()
    .then(() => {
        res.cookie('session-token', token)
        res.send('success')
    }).catch(console.error);
})


//DISPLAY PROFILE ROUTES
app.get('/profile', checkAuthenicated, (req, res) => {
    let user = req.user;
    res.render('profile', {user})
})

app.get('/logout', (req, res) => {
    res.clearCookie('session-token')
    res.redirect('../.')
})

//MIDDLEWARE
function checkAuthenicated(req, res, next) {

    let token = req.cookies['session-token']

    let user = {}

    async function verify() {
        const ticket = await client.verifyIdToken( {
            idToken: token,
            audience: CLIENT_ID,
        })
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
    .then(() => {
        req.user = user;
        next();
    })
    .catch(err => {
        res.redirect('/logingoogle')
    })

}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})