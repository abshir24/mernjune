const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const router = require('./routers/router')
const mongoose = require('mongoose');

const app = express()

app.use(bodyParser.json())

app.use('/', router)

let connectionString ="Mongo DB CONNECTION STRING"

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

