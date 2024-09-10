let books = [
    {
        "id":"1",
        "title":"Twilight",
        "author":"Twilight Author"
    },
    {
        "id":"2",
        "title":"The cat in the hat",
        "author":"Dr suess"
    }
]

const getAllBooks = async (req,res) =>{
    res.send(books)
}

const addBook = async (req,res) =>{
    books.push(req.body) 

    res.send(books)
}

const getBookById = async (req,res) =>{
    let id = req.params.id

    let book = books.find((book) => book.id == req.params.id)

    res.send(book)
}

const updateBook = async (req,res) =>{
    let id = req.params.id

    let book_index = books.findIndex((book) => book.id == req.params.id)

    books[book_index] = req.body

    res.send(books)
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