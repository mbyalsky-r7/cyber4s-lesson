const db = require('../../../../db/connections')

const Schama = db.mongoose.Schema

const ArtistSchema = new Schama(
    {
        name: String,
        genre: String,
        year: Number,
    }, {versionKey: false}
)

ArtistSchema.statics.getArtistByName = async function (name) {
    return await this.findOne(
        {name: name}, {_id: 0}
    )
}

exports.ArtistModel = db.dbConnection.model(
    'Artist',
    ArtistSchema,
    'artists',
)