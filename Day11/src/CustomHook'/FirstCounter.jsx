import UseCounter from "./UseCounter";


function FirstCounter() {
    const {count, increment, deccrement, reset} = UseCounter(10);

  return (
    <div>
        <h1>First Counter :</h1>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={deccrement}>Deccrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default FirstCounter