import { useState } from "react";

function Counters(){
    const [count, setCount]  = useState(0);
    function setDecrement(){
        if(count <= 0)
        {
            setCount(0);
        }
        else{
            setCount(count-1);
        }
    }
    return(

        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>       
            <button onClick={() => setDecrement()}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
       </div>
    )

}
export default Counters;