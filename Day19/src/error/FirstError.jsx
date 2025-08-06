import React from 'react'

function FirstError(props) {

    try {
        throw new Error("Something Broken!!!.....");
    }
    catch (error){
        return <p> some error occured in the firstError component...</p>
    }
    
  return (
    <div>
        <h2>This is first component from error folder</h2>
        <h3>{props.name}</h3>
    </div>
  )
}

export default FirstError;