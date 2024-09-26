import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getBooks } from './api/api'
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';
import DeleteBook from './components/DeleteBook';


function App() {
  const [books, setBooks] =  useState([]);

  useEffect(() =>{
    const fetchBooks = async() =>{
      const response = await getBooks();
      setBooks(response.data)
    }

    fetchBooks()
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = { <BookList books= { books } /> } exact />
          <Route path='/new' element = { <BookForm /> } />
          <Route path='/edit/:bookid' element = { <EditBookForm /> } />
          <Route path='/delete/:bookid' element = { <DeleteBook /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
