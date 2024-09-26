import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addPost } from '../api/api'

function PostForm(){
    const navigate = useNavigate()
    const [post, setPost] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const response = await addPost( {author: author, post:post })
       
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h1>New Post:</h1>

            <input
                type="text"
                placeholder='Author'
                value = {author}
                onChange = { (e) => setTitle(e.target.value) }
                required
            />

            <input
                type="text"
                placeholder='Post'
                value = {post}
                onChange = { (e) => setAuthor(e.target.value) }
                required
            />

            <button type="submit">Add Post!</button>
        </form>
    )

}

export default PostForm