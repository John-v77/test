const mongoose = require('mongoose')

const express = require('express')
// const router = express.Router()  moved to routes.js

require('dotenv').config()  

const cors = require('cors')
const app = express()

app.use(
    cors({
        credentials:true,
        origin: ["http://localhost:3000"]  //Swap this with the client url
    })
)


app.use('/api', require('./routes'))   // after adding this line on front end route must include /api, eg: localhost:5000/api/addaPost

const MONGODB_URI=process.env.MONGODB_URI || `mongodb://localhost/localIronPlate`



mongoose
    .connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((x) => console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));


// app.post('/addAPost ', (req, res, next) => {
//     console.log("we made it to the back end")           Moved to routes.js
//     })


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Listening to port', PORT))