const express = require('express')
const router = express.Router()

const Post = require('../model/Post')   // require a specific funtion not the whole file


router.post('/addAPost ', (req, res, next) => {
    console.log("we made it to the back end", req.body)
    let post = await Post.create(req.body)    // network tab - pending we didnt get a response back from local host
                                                            // to fix it it needs the next line of code |=>
    res.status(200).json(post)
    })

module.exports = router   // this "router" gets imported on index.js - backend , line 19:    app.use('/api', require('./routes'))

