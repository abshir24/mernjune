const Book = require('../models/Book')


const getAllBooks = async (req,res) =>{
    //RETRIEVE ALL RECORDS
    Book.find()
        .then((books)=> res.send(books))
        .catch((err) => console.log(err))
}

const addBook = async (req,res) =>{
    const { title, author } = req.body

    const newBook = new Book({
        title: title,
        author: author
    })

    newBook.save()
        .then((book) =>{
            console.log("Current Book:", book)
            res.send(book)
        })  
        .catch((err) => console.log("Error:", err))  
}

const getBookById = async (req,res) =>{
    let id = req.params.id

    Book.findById(id)
        .then((book) => res.send(book))
        .catch((err) => console.log(err))
}

const updateBook = async (req,res) =>{
    let id  = req.params.id
    let { title, author} = req.body

    let updatedBook = {
        title: title,
        author: author
    }

    Book.findByIdAndUpdate(id, updatedBook, { new:true })
        .then((book) => res.send(book))
        .catch((err) => console.log(err));
}

const deleteBook = async (req,res) =>{
    let id = req.params.id

    let book_index = books.findIndex((book) => book.id == req.params.id)

    books.splice(book_index, 1)

    res.send(books)
}


module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
}