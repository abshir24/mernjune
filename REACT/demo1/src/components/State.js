import React, { useState } from 'react';
//React assignment 11
const State = () => {

  const [address, setAddress] = useState({

    phoneNumber: "978-435-1780",

    address:{

      houseNumber: "E-142/10",

      street: "Street 50",

      district: "Garden Town",

      city: "Karachi",

    },

  });

  const changeAddressState = () => {

    setAddress({

        phoneNumber: "555-555-5555",
    
        address:{
    
          houseNumber: "29765",
    
          street: "53rd Ave",
    
          district: "U-District",
    
          city: "Seattle",
    
        },
    
      })

  }

  return (

    <div>

      <button onClick={ changeAddressState }>Update state</button>

      <div>State: {JSON.stringify(address)}</div>

    </div>

  );

};

export default State;
