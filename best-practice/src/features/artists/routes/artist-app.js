const artistsRoute = require('express').Router()
const {genericResponse} = require('../../../shared/libs/utils')
const handler = require('../handlers/app-handler')
const libs = require('../shared/libs')

artistsRoute.get('/', genericResponse(getArtists, libs.enums.artistsErrors.artistNotFound))
artistsRoute.post('/', genericResponse(addArtist, libs.enums.artistsErrors.artistNotFound))

function getArtists(req) {
    const name = req.body.name
    return handler.getArtistByName(name)
}

function getArtists() {
    return handler.getArtistCount()
}


/**
 * @api {get} /artists Get Artists
 * @apiName GetArtists
 * @apiGroup Artists
 * @apiDescription get all artists from db
 * @apiExample Request URL example:
 *  /artists
 * @apiSuccessExample {json} Response (example):
 * [
 * {
        "name": "michael",
        "genre": "rock",
        "year": 1996,
   }
 ]
 **/


// async function getArtists(req, res) {
//
//     const responseJson = {
//         success: false,
//         data: null,
//     };
//     try {
//         responseJson.success = true
//         responseJson.data = await handler.getArtistByName(req.body.name)
//     } catch (err) {
//         responseJson.success = false
//         responseJson.data = err.message
//     }
//
//     return res.json(responseJson)
// }



function addArtist(req) {
    return handler.addNewArtist(req.body)
}


module.exports = artistsRoute

