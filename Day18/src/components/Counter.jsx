import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Counter() {

    const count = useSelector((state => state.count));  // read the value from the store
    const dispatch = useDispatch(); //used to dispatch action
  return (
    <div>
      <h2> Count: {count}</h2>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default Counter
