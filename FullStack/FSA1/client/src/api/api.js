import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getPosts = () => api.get('/posts')
export const addPost = (post) => api.post('/posts', post)
export const updatePost = (id,post) => api.put(`/posts/${id}`, post)
export const getPost = (id) => api.get(`/posts/${id}`)
export const deletePost = (id) => api.delete(`/posts/${id}`)