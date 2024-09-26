import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { getPosts } from './api/api'


function App() {
  const [posts, setPosts] =  useState([]);

  useEffect(() =>{
    const fetchPosts = async() =>{
      const response = await getPosts();
      setBooks(response.data)
    }

    fetchBooks()
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<PostForm />} exact />
        </Routes>
      </Router>

      <div>
        { posts.map(post => (
            <div>
                <h3>Post: {book.post}</h3>
                <h3>Author:{book.author}</h3>  
            </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
