const express = require("express")

const router = express.Router()

const { getAllPosts, addPost, getPostById, updatePost, deletePost } = require('../controllers/controller')


// Leave empty for routes

router.get("/posts", getAllPosts) 
router.post('/posts',addPost)
router.get("/posts/:id", getPostById)
router.put("/posts/:id", updatePost)
router.delete("/posts/:id", deletePost)

module.exports = router