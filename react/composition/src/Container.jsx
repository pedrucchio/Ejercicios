import React, { useState } from 'react'

function Container({ title,children }) {
    const [collape,setCollapse] = useState(false);

    function handleHidden() {
        setCollapse(t => !t)    
    }

  return (
    <div className='container'>
        <h1 onClick={handleHidden}>{title}</h1>
        {collape && <div className='app-content'>{children}</div>}
    </div>
  )
}

export default Container
