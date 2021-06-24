const router = express.Router()

router.post('/addAPost ', (req, res, next) => {
    console.log("we made it to the back end")
    })

module.exports = router   // this "router" gets imported on index.js - backend , line 19:    app.use('/api', require('./routes'))