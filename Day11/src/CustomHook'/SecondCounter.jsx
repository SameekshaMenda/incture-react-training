import UseCounter from "./UseCounter";


function SecondCounter() {
 const {count, increment, deccrement, reset} = UseCounter(20);

  return (
    <div>
        <h1>Second Counter :</h1>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={deccrement}>Deccrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}


export default SecondCounter;