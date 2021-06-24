import React, { useEffect, useState } from 'react';
import axios from 'axios';

function displayAllItems(props) {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/getAllPosts`)
            .then((allPosts) => {
                setPosts(allPosts.data)
            }) 
        // .then(console.log)
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

export default displayAllItems;