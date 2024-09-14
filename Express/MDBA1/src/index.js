const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const router = require('./routers/router')
const mongoose = require('mongoose');

const app = express()

app.use(bodyParser.json())

app.use('/', router)

let connectionString ="mongodb+srv://abshirtech24:testpass123@expressa3.qbgye.mongodb.net/?retryWrites=true&w=majority&appName=expressA3"

mongoose.connect(connectionString)
.then(()=>{
    const port = 8080

    console.log("Connected To DB")

    app.listen(port, () =>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error) =>{
    console.log(error)  
})

