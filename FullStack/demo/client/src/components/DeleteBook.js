import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

import { deleteBook, getBook } from '../api/api'

function DeleteBook( { books } ){
    const navigate = useNavigate()
    const params = useParams()
    const [book, setBook] = useState( {title:'', author:''} )

    useEffect(() =>{
        const fetchBook = async() =>{
            const response = await getBook(params.bookid);
            setBook(response.data)
        }
        
        fetchBook()
      }, [])

    const handleDelete = async () =>{

        const response = await deleteBook(params.bookid)

        console.log("Response: ", response.data)

        navigate('/')
    }


    return (
        <div>
            <h1>Are you sure that you want to delete the following book?</h1>

            <h2>Title: { book.title }</h2>
            <h2>Author: { book.author }</h2>

            <div>
                <a> <button onClick={handleDelete}> Yes </button> </a>
                <a> <button onClick={ () => navigate('/') }> No </button> </a>
                
            </div>

        </div>
    )

}

export default DeleteBook