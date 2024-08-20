import React from 'react';
import { useParams } from 'react-router-dom'

function User(){
   const params = useParams()

   let users = [
    {
        id:1,
        name:"Test"
    },
    {
        id:2,
        name:"Test 2"
    }
   ]  

   let user = users.find((user) => user.id == params.userid)
   
   return (
    <div>
       <h1>Users Id : { user.id }</h1>
       <h1>Users name: { user.name }</h1>
    </div>
   )
}

export default User