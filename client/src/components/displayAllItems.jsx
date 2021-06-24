import React, { useEffect, useState } from 'react';
import actions from '../api';

function DisplayAllItems(props) {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        actions.getAllPosts().then((allPosts) => {
            setPosts(allPosts.data)
        }).catch(console.error)

            // this function got moved on api.js File
        // axios.get(`http://localhost:5000/api/getAllPosts`)
        //     .then((allPosts) => {
        //         setPosts(allPosts.data)
        //     }) 
        // .then(console.log)  //this then is an extra step to console log the response from the server
        // .catch(console.error)

    },[])

    return (
        <div>
            <h3>All items</h3>
            <ul>
                {posts.map(each => {
                    return (
                        <li key={each._id}>{each.post}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default DisplayAllItems;