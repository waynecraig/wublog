"use strict";
const express = require('express')
const compress = require('compression')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const actions = require('./actions')

const app = express()

app.use(compress())

app.use(express.static(path.join(__dirname, 'static')))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'craig wublog',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

const passport = require('./modules/localPassport')
app.use(passport.initialize())
app.use(passport.session())

const router = require('./modules/router')
app.use(router)

app.use('/cgi-bin/', actions);

const port = 6789
app.listen(port, ()=>console.log('listening on port', port))