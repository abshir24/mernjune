import React, {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { updateBook } from '../api/api'

function EditBookForm(){
    const navigate = useNavigate()
    const params = useParams()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        // The next 2 lines is how you submit the data from without using onChange
        // console.log("Event Data", e.target[0].value, e.target[1].value )
        // await addBook( {title:  e.target[0].value, author:  e.target[1].value })

        const response = await updateBook(params.bookid, {title:  title, author:  author })

        console.log("Response: ", response.data)

        navigate('/')
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h1>Edit Book:</h1>

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

            <button type="submit">Edit Book</button>
        </form>
    )

}

export default EditBookForm