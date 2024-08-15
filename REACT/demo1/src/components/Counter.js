import React from 'react';

function Counter(){
   const [counter, setCounter] = React.useState(0)

   React.useEffect(()=>{
    console.log("The value in counter is: ", counter)
   }, [counter])


   let incrementCounter = ()=>{
        setCounter(counter + 1)
   }

   let decrementCounter = ()=>{
    setCounter(counter - 1)
   }

   let resetCounter = ()=>{
    setCounter(0)
   }

   return (
    <div> 
        <h1>Counter: {counter} </h1>

        <button onClick = {incrementCounter}> Add 1</button>
        <button onClick = {decrementCounter}> Subtract 1</button>
        <button onClick = {resetCounter}> Reset Counter</button>
    </div>
   )
}

export default Counter