const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URL=process.env.MONGODB_URI || `mongodb://localhost/localIronPlate`
const PORT = process.env.PORT || 5000

mongoose
    .connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((x) => console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));
