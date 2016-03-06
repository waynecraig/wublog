"use strict";
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')

const app = express()

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

const port = 6789
app.listen(port, ()=>console.log('listening on port', port))
