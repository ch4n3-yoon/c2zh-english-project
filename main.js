module.exports = function(app){
    const express = require('express')
    const bodyParser = require('body-parser')
    const session = require('express-session')
    const path = require('path')
    const fs = require('fs')
    const crypto = require('crypto')

    app.set('views', __dirname + '/views')
    app.use(express.static(path.join(__dirname, '/views')))

    app.use(express.static(path.join(__dirname, '/static')))


    app.set('view engine', 'ejs')
    app.engine('html', require('ejs').renderFile)
    app.use(express.json());       
    app.use(express.urlencoded()); 

    app.use(session({
        secret: 'this_is_filterd_secret_key_haha-y0u_c4n-gue5s-1t?-i-d0nt_kn0w...-y0u_c4n-guess-1t_grin@~@',
        resave: false,
        saveUninitialized: true
    }))

    const index = require('./app/index')(app)
}