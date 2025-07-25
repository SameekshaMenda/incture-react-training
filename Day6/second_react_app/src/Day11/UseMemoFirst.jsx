import { useState, useMemo } from "react"

// function UseMemoFirst() {

//     const [count, setcount] = useState(0);
//     const [number, setnumber] = useState(10);

//     function expFunction(number) {
//         console.log("expensive function called...");
//         for (let i = 1; i <= 100000; i++) {
//             return number * number;
//         }
//     }
//     const result = expFunction(number);
//     return (
//         <div>
//             <h1>Functional Component with Usememo Hook</h1>
//             <h2>Result : {result}</h2>
//             <h3> count : {count}</h3>
//             <button onClick={() => setcount(count + 1)}>UpdateCount</button>
//             <h3>Number: {number}</h3>
//             <button onClick={() => { setnumber(number + 5) }}>UpdateNumber</button>
//         </div>
//     )
// }

// export default UseMemoFirst

//-------------------------------------------------------------------------------------------------

function UseMemoFirst() {

    const [count, setcount] = useState(0);
    const [number, setnumber] = useState(10);

    function expFunction(num) {
        console.log("expensive function called...");
        for (let i = 1; i <= 100000; i++) {
            return num * num;
        }
    }
    const result = useMemo(() => expFunction(number),[number]);   //when the number changes then expFunction()(recomputing) is called
    return (
        <div>
            <h1>Functional Component with Usememo Hook</h1>
            <h2>Result : {result}</h2>
            <h3> count : {count}</h3>
            <button onClick={() => setcount(count + 1)}>UpdateCount</button>
            <h3>Number: {number}</h3>
            <button onClick={() => { setnumber(number + 5) }}>UpdateNumber</button>
        </div>
    )
}

export default UseMemoFirst