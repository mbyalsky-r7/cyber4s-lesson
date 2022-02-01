const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded());

app.use('/api', require('./routes'))

app.listen(3000, () => {
    console.log('app is running')
})