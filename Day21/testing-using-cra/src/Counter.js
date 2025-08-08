import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>Count : {count}</h2>
        <p>You Clicked Button {count} Times.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter