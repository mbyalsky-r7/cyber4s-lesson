const db = require('../db/connections')

const Schama = db.mongoose.Schema

const ArtistSchema = new Schama(
    {
        name: String,
        author: String,
        year: Date,
    }
)

exports.ArtistModel = db.dbConnection.model(
    'Artist',
    ArtistSchema,
    'artists',
)