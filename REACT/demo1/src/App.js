import logo from './logo.svg';
import './App.css';
import ElementRenderer from './components/ElementRenderer';
import Counter from './components/Counter';
import Effect from './components/Effect';
import State from './components/State';
import Users from './components/Users'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function ConditionalRenderer(){
  var isVisible = false

  var component =  isVisible ==  true ? <h1>Component is visible</h1> : <h1>Component is not visible</h1>

  return component
}

function App() {
  

  return (
    <Router>
      <h1>React Router test</h1>
      
      <Routes>
        <Route path='/users/:userid' element = {<Users />} />
        
        <Route path='/counter' element = {<Counter />} />

        <Route path='/state' element = {<State />} />

        <Route path='/renderer' element = {<ConditionalRenderer />} />
      </Routes>
    </Router>
  );
}

export default App;
