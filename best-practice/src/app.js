const express = require('express')
const {artistsRoute} = require('./features/artists')
const app = express()
app.use(express.json())
app.use(express.urlencoded());

// app.use('users', require('./users'))
//
// app.use('albums', require('./albums'))

app.use('/artists', artistsRoute)

module.exports = app

