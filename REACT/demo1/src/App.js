import logo from './logo.svg';
import './App.css';
import ElementRenderer from './components/ElementRenderer';
import Counter from './components/Counter';
import Effect from './components/Effect';
import State from './components/State';
import Users from './components/Users'
import { BrowserRouter as Router, Route,Routes, useParams } from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1>React Router test</h1>
      
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/item/:id' element={<Detail />} />

        {/* <Route path='/users/:userid' element = {<Users />} />
        
        <Route path='/counter' element = {<Counter />} />

        <Route path='/state' element = {<State />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
