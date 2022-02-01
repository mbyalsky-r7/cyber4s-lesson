const usersRoute = require('express').Router()
const {UserModel} = require('../models/user')

usersRoute.get('/users', async (req, res) => {
    try {
        const users = await UserModel.findAll({})
        res.json(users)
    } catch (err) {
        console.log(err)
    }

})

module.exports = {
    usersRoute
}
