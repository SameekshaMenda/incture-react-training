import { useState } from "react";

// function Counter(){

//     const [count,setCount] = useState(0);
//     function Update(){
//         setCount(count+1);
//     }
//     return(
//         <div>
//             <h2>Counter : {count}</h2>
//             <button onClick={Update}>Increment</button>
//         </div>
//     )
// }
// export default Counter;

//--------------------------------------writing in a more precise way------------------------------
function Counter(){

    const [count,setCount] = useState(0);
    console.log("Rendering...")
    return(
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}
export default Counter;