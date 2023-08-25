const express = require('express')
const app = express()
const routes = require('./routes/router')
const cors = require('cors')

const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json())
app.use(cors());
app.use('/', routes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})