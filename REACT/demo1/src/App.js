import logo from './logo.svg';
import './App.css';
import ElementRenderer from './components/ElementRenderer';
import Counter from './components/Counter';
// import State from './components/State'

function ConditionalRenderer(){
  var isVisible = false

  var component =  isVisible ==  true ? <h1>Component is visible</h1> : <h1>Component is not visible</h1>

  return component
}
function App() {
  var subscribed = false


  var test = subscribed == true ? "Subscribed" : "Subscribe"

  return (
    <div>
      {/* <State/> */}
      <Counter/>
    </div> 
  );
}

export default App;
