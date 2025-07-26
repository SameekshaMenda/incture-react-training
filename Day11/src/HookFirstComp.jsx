// function HookFirstComp()
// {
//     let count = 0;
//     function increment()
//     {
//         count++;
//         console.log(`count : ${count}`);
//     }

//     return(<div>
//         <h1> Functional Component Without State :</h1>
//         <h2>Count : {count}</h2>
//         <button onClick={increment}>Increment</button>
//     </div>)
// }
// export default HookFirstComp


//------------------------with usestate-----------------------------
import { useState } from "react";
function HookFirstComp()
{
    const [count, setCount] = useState(0);
    function increment()
    {
        setCount(count+1);
        console.log(`count : ${count}`);
    }

    console.log("Component Rendered...")
    
    return(<div>
        <h1> Functional Component Without State :</h1>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>)
}
export default HookFirstComp