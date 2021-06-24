import React, { useState } from 'react';
import axios from 'axios';
import actions from '../api';

function AddItem(props) {

    const [post, setPost]=useState('')

    const handleSubmit =(event)=>{
    //send it to the server
        event.preventDefault()
        // moved to api.js
        // axios
        // .post('http//localhost:5000/api/addItem', {post})
        // .then(console.log)

        actions.addItem(post)
        .then(newPost => {
            console.log('new Post:', newPost)
            // console.log('props')                       seach for props.history
            props.history.push(`displayAllItems`)    //this redirect the page to page displayAllItems
        })
        .catch(console.error)
    }

    const handleChange=(event)=>{
        //on typing set post
        setPost(event.target.value)

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input onChange={handleChange} type="text" name="post" placeholder="Make a post ..." />
             <button>Post it</button>
            </form>
        </div>
    );
}

export default AddItem;