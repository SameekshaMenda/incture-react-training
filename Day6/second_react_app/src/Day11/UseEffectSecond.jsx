// import { useState, useEffect } from "react";

// function UseEffectSecond() {

//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("useEffect Called...")
//         console.log(`Count : ${count}`)
//     }, [])  //to  make it work like a componentDdUpdate give count dependencies

//     function increment() {
//         setCount(count + 1);
//     }


//     return (
//         <div>
//             <h1>Third Component :</h1>
//             <h2>Count : {count}</h2>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// }
// export default UseEffectSecond

//----------------------------------------------------------------------

import { useState, useEffect } from "react";

function UseEffectSecond() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect Called...")
        console.log(`Count : ${count}`)
    }, [count])  //to  make it work like a componentDdUpdate give count dependencies

    function increment() {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>Third Component :</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default UseEffectSecond