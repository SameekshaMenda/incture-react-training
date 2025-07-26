import { useState } from "react";
import "./Counters.css"

function Counters(props){
    const [count, setCount]  = useState(props.input);
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

        <div class="counter-container">
        <h1>Counter App </h1>
        <h2>Counter : {count}</h2>
        <div class="container">
            <button onClick={() => setCount(count+1)}>Increment</button>       
            <button onClick={() => {if(count <= 0){setCount(0);} else{ setCount(count-1);}}}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
       </div>
       </div>
    )

}
export default Counters;