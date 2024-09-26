const Post = require('../models/Post')


const getAllPosts = async (req,res) =>{
    //RETRIEVE ALL RECORDS
    Post.find()
        .then((posts)=> res.send(posts))
        .catch((err) => console.log(err))
}

const addPost = async (req,res) =>{
    const { title, author } = req.body

    const newPost = new Post({
        title: title,
        author: author
    })

    newPost.save()
        .then((post) =>{
            console.log("Current Post:", post)
            res.send(post)
        })  
        .catch((err) => console.log("Error:", err))  
}

const getPostById = async (req,res) =>{
    let id = req.params.id

    Post.findById(id)
        .then((post) => res.send(post))
        .catch((err) => console.log(err))
}

const updatePost = async (req,res) =>{
    let id  = req.params.id
    let { title, author} = req.body

    let updatedPost = {
        title: title,
        author: author
    }

    Post.findByIdAndUpdate(id, updatedPost, { new:true })
        .then((post) => res.send(post))
        .catch((err) => console.log(err));
}

const deletePost = async (req,res) =>{
    let id = req.params.id
    
    Post.findByIdAndDelete(id)
        .then((post) => res.send(post))
        .catch((err) => console.log(err))
}


module.exports = {
    getAllPosts,
    addPost,
    getPostById,
    updatePost,
    deletePost
}