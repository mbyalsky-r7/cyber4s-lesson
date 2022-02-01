const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const DB_URL = 'mongodb://localhost:27017/my-db';

let dbConnection = mongoose.createConnection(DB_URL);

dbConnection.on('connected', () => {
    console.log('connected')
});

dbConnection.on('error', (error) => {
    console.log(error)
});


module.exports = {
    dbConnection,
    mongoose
}
