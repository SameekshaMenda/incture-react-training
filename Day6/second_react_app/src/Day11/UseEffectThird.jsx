// import { useState, useEffect } from "react";

// function UseEffectThird(){

//     const [count, setCount] = useState(0);
//     const [theme, setTheme] = useState("light");
//     useEffect(() => {
//         console.log("useEffect Called...");
//         console.log(`count : ${count}`);
//         console.log(`theme : ${theme}`);
//     },[theme])
//     return(
//         <div>
//             <h1>Third Component :</h1>
//             <h2>count : {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
//             <h2>Theme : {theme}</h2>
//             <button onClick={() => setTheme(theme == 'light' ? 'dark': 'light')}>Change Theme</button>
//         </div>
//     )
// }
// export default UseEffectThird;

//-------------------------------------------------------------------

import { useState, useEffect } from "react";

function UseEffectThird(){

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");


    useEffect(() => {
        console.log("count useEffect Called...");  // we create separate useeffect for count and theme
        console.log(`count : ${count}`);
    },[count])

    useEffect(() => {
        console.log("theme useEffect Called...");
        console.log(`theme : ${theme}`);
    },[theme])
 
    return(
        <div>
            <h1>Third Component :</h1>
            <h2>count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <h2>Theme : {theme}</h2>
            <button onClick={() => setTheme(theme == 'light' ? 'dark': 'light')}>Change Theme</button>
        </div>
    )
}
export default UseEffectThird;