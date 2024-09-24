import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addBook } from '../api/api'

function BookForm(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        // The next 2 lines is how you submit the data from without using onChange
        // console.log("Event Data", e.target[0].value, e.target[1].value )
        // await addBook( {title:  e.target[0].value, author:  e.target[1].value })

        const response = await addBook( {title:  title, author:  author })

        console.log("Response: ", response.data)

        navigate('/')
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h1>New Book:</h1>

            <input
                type="text"
                placeholder='Title'
                value = {title}
                onChange = { (e) => setTitle(e.target.value) }
                required
            />

            <input
                type="text"
                placeholder='Author'
                value = {author}
                onChange = { (e) => setAuthor(e.target.value) }
                required
            />

            <button type="submit">Add Book</button>
        </form>
    )

}

export default BookForm