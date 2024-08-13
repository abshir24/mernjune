import React from 'react';

function Counter(){
   const [counter, setCounter] = React.useState(0)

   let incrementCounter = ()=>{

        setCounter(counter + 1)

   }

   let decrementCounter = ()=>{

    setCounter(counter - 1)

   }

   return (
    <div> 
        <h1>Counter: {counter} </h1>

        <button onClick = {incrementCounter}> Add 1</button>
        <button onClick = {decrementCounter}> Subtract 1</button>
    </div>
   )
}

export default Counter