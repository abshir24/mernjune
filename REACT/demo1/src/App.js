import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import ElementRenderer from './components/ElementRenderer';
import Counter from './components/Counter';
import Effect from './components/Effect';
import State from './components/State';
import Users from './components/Users'
import DisplayCounter from './components/DisplayCounter';
import { BrowserRouter as Router, Route,Routes, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

// const Dashboard = () => <h1>This is the dashboard</h1>;
// const Login = () => <h1>This is the login component</h1>;




function App() {
  const dispatch = useDispatch();
  let { counter, names, numbers } = useSelector((state) => state)

 
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Global Redux counter : { names }</h1>
          <button onClick={() => dispatch({type:"ADDNAME", payload: "Bob"})}  >+1</button>
          <button>-1</button>
        </header> 
      </div>

    // <Router>
    //   <h1>React Router test</h1>
    //   <button onClick = { () => setLoggedIn(!isLoggedin) }> { isLoggedin ? "Logout" : "Login" }</button>
      
    
    //   <Routes>
        
        
    //     <Route path='/' element = { isLoggedin ? <Dashboard /> : <Navigate replace to='/login'/> } />

    //     <Route path='/login' element = { isLoggedin ? <Navigate replace to='/'/> :  <Login /> } />

         
       

    //   </Routes>
    // </Router>
  );
}

export default App;
