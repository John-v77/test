import axios from 'axios'

const actions ={
    getAllPosts: async () => {
        return await axios.get('http://localhost:5000/api/getAllPosts')
    },

    addItem: async (post) => {
        return await axios.post('http://localhost:5000/api/addAPost', {post})
    }


}

export default actions