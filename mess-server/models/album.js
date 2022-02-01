const db = require('../db/connections')

const Schama = db.mongoose.Schema

const AlbumSchema = new Schama(
    {
        name: String,
        author: String,
        year: Date,
    }
)

exports.AlbumModel = db.dbConnection.model(
    'Album',
    AlbumSchema,
    'albums',
)