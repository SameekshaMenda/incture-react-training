import { useState } from "react";

function UseCounter(initialValue = 5) {

    const[count, setCount] = useState(initialValue)
    
    const increment = () => setCount(count + 1);
    const deccrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    
    
    return {count, increment, deccrement, reset};
}

export default UseCounter