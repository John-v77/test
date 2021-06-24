import React, { useState } from 'react';
import axios from 'axios';

function AddItem(props) {

    const [post, setPost]=useState('')

    const handleSubmit =(event)=>{
    //send it to the server
        event.preventDefault()
        axios
        .post('http//localhost:5000', {post})
        .then(console.log)
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