import React from 'react'

function FirstError(props) {

   
        throw new Error("Something Broken!!!.....");
   
    
  return (
    <div>
        <h2>This is first component from error folder</h2>
        <h3>{props.name}</h3>
    </div>
  )
}

export default FirstError;