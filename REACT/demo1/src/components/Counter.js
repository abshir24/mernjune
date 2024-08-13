import React from 'react';

function Counter(){
   const [counter, setCounter] = React.useState(0)
   
   const [name, setName] = React.useState("Tim")

   let updateName = ()=>{
        let names = ["Tom","Jerry","Sarah","Judy"]

        setName(names[3])
   }


   let updateCounter = ()=>{

    setCounter(counter + 1)

   }

   return (
    <div>

        <h1>Name: {name} </h1>
        
        <button onClick = {updateName}>Generate Random Name</button> 


        {/* <h1>Counter: {counter} </h1>
        
        <button onClick = {updateCounter}>+1</button> */}
    </div>
   )
}

export default Counter