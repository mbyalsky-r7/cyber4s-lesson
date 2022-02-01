const albumsRoute = require('express').Router()
const {AlbumModel} = require('../models/album')

albumsRoute.get('/albums', async (req, res) => {
    try {
        const albums = await AlbumModel.findAll({})
        res.json(albums)
    } catch (err) {
        console.log(err)
    }

})

module.exports = {
    albumsRoute
}

