import React from 'react';
import { useNavigate } from 'react-router-dom';

function DisplayCounter(){
    const navigate = useNavigate()

    const navigateTo = ()=>{
      navigate('/counter')
    }
    
    return <div>
        <button onClick = { navigateTo }> Navigate </button>
    </div>
}

export default DisplayCounter