const apiRoute = require('express').Router()

apiRoute.use('users', require('./users'))

apiRoute.use('albums', require('./albums'))

apiRoute.use('artists', require('./artists'))

module.exports = {
    apiRoute
}


