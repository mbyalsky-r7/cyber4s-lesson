const db = require('../db/connections')

const Schama = db.mongoose.Schema

const UserSchema = new Schama(
    {
        name: String,
        password: String,
        email: String,
    }
)

exports.UserModel = db.dbConnection.model(
    'User',
    UserSchema,
    'users',
)