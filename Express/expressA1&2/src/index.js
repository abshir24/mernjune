const express = require("express")
const app = express()


//Route handler that sends a message. For express Assignment 1
app.get("/", (req,res)=>{
    let name = "Abshir"
    let food  = "Salad"
    let vacation = "Mexico"

    let response = `Name: ${name}, Favorite Food: ${food}, Vacation: ${vacation}`

    res.send(response)
})

app.get("/displayname", (req,res)=>{
    let name = "Abshir"
    

    let response = `<h1> Name: ${name} </h1>`

    res.send(response)
})

app.get("/displayfood", (req,res)=>{
    let food  = "Salad"
    

    let response = `<h1> Favorite Food: ${food} </h1>`

    res.send(response)
})

app.get("/displayvacation", (req,res)=>{
    let vacation = "Mexico"
    

    let response = `<h1> Vacation: ${vacation}</h1>`

    res.send(response)
})

const port = 8080

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})