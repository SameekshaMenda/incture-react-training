import React from 'react'
import { useRef } from 'react'
function SecondForm() {

  const nameRef = useRef(null);
  
  const handleSubmit = (event) =>{
    event.preventDefault(); // prevents rendering the page so that data is not lost after alert
    alert(`Name: ${nameRef.current.value}`);
    console.log("Rendering SecondForm");
    // nameRef.current.value = ''; // Clear the input field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={nameRef}/><br></br>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default SecondForm