const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const DB_URL = 'mongodb://localhost:37017/my-db';

let dbConnection = mongoose.createConnection(DB_URL);

dbConnection.on('connected', () => {
    console.log('connected')
});

module.exports = {
    dbConnection,
    mongoose
}
