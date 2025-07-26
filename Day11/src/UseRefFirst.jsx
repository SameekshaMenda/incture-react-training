// import { useState, useRef } from "react"

// function UseRefFirst() {

//     function focus(){

//     let input_obj = document.getElementById("input");  //bad practice
//     input_obj.focus();
//     }
//   return (
//     <div>
//         <h1>Functional component without UseREf Hook :</h1>
//         <input id="input" type="text"/><br></br><br></br>
//         <button onClick={focus}>Focus Input</button>
//     </div>
//   )
// }

// export default UseRefFirst;

//=================================================================
import { useRef } from "react"

function UseRefFirst() {

    const inputRef = useRef();  //will hold the refernce of input field using ref={inputRef}
    function focus(){

    inputRef.current.focus();  //curret dom  && for particular dom
    // inputRef.current.value="React";
    // inputRef.current.style.color="red";    
    inputRef.current.style.display="none"
}
  return (
    <div>
        <h1>Functional component without UseREf Hook :</h1>
        <input id="input" type="text" ref={inputRef}/><br></br><br></br>
        <button onClick={focus}>Focus Input</button>
    </div>
  )
}

export default UseRefFirst;