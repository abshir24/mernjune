const express = require("express")

const router = express.Router()

const { getAllBooks, addBook, getBookById, updateBook, deleteBook } = require('../controllers/controller')


// Leave empty for routes

router.get("/books", getAllBooks) 
router.post('/books',addBook)
router.get("/books/:id", getBookById)
router.put("/books/:id", updateBook)
router.delete("/books/:id", deleteBook)

module.exports = router