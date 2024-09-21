import React, {useState} from 'react'

function BookForm(){
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


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