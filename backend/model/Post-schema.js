const {Schema, model} = require('mongoose')
const Post = model('Post', new Schema({
    post: String
}))

module.exports = Post