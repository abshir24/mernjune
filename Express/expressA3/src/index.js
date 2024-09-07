const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

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


//Route handler that sends a message. For express Assignment 1
app.get("/books", (req,res)=>{
    res.send(books)
})

app.post("/books", (req,res)=>{
    books.push(req.body) 

    res.send(books)
})

app.get("/books/:id", (req,res)=>{
    let id = req.params.id

    let book = books.find((book) => book.id == req.params.id)

    res.send(book)
})

app.put("/books/:id", (req,res)=>{
    let id = req.params.id

    let book_index = books.findIndex((book) => book.id == req.params.id)

    books[book_index] = req.body

    res.send(books)
})

app.delete("/books/:id", (req,res)=>{
    let id = req.params.id

    let book_index = books.findIndex((book) => book.id == req.params.id)

    books.splice(book_index, 1)

    res.send(books)
})

const port = 8080

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})

