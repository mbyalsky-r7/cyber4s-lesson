const {ArtistModel} = require('../shared/models/artist')

exports.getArtistByName = async function (name) {
    // logic here
    console.log(name)
    return await ArtistModel.getArtistByName(name)
}

exports.addNewArtist = async function (newArtist) {
    const artistToSave = new ArtistModel(newArtist)
    return await artistToSave.save()
}