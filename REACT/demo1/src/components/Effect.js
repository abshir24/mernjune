import React, { useEffect, useState } from 'react';

const defaultTitle = 'React with Hooks';

const Effect = () => {
  const [title, setTitle] = useState(0);


  useEffect(() => {

    if(title !== null){
        document.title = title;
    }
    
  }, [title]);

  // Your code ends here

  return (

    <div>

      Condition used inside a Hook

      <button onClick={() => setTitle(title + 1)}>+1</button>

    </div>

  );

};

export default Effect