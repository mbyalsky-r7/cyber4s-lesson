const artistsRoute = require('express').Router()
const {ArtistModel} = require('../models/artist')

artistsRoute.get('/artists', async (req, res) => {
    try {
        const artists = await ArtistModel.find({})
        res.json(artists)
    } catch (err) {
        console.log(err)
    }

})

module.exports = {
    artistsRoute
}

