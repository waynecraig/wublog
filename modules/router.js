"use strict";
const router = require('express').Router({caseSensitive: true})
const config = require('../configs/router.json')

for (let p in config) {

    const fn = require('../actions' + p)

    config[p].methods.map(m => router[m](p, fn))

}

module.exports = router
