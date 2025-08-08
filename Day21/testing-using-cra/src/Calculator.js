import { useState } from "react";

import React from 'react'

function Calculator() {

const [Num1, setNum1] = useState('');
const [Num2, setNum2] = useState('');
const [Result, setResult] = useState(null)

const add = () => setResult(Number(Num1) + Number(Num2));

  return (
    <div>
        <h2>Simple Calculator</h2>
        <input
        type="number"
        placeholder="First Number"
        value={Num1}
        onChange={(e) => setNum1(e.target.value)}
        data-testid="Num1"/>

        <input
        type="number"
        placeholder="First Number"
        value={Num2}
        onChange={(e) => setNum2(e.target.value)}
        data-testid="Num2"/>

        <button onClick={add}>Add</button>

        {Result !== null && 
            <h3 data-testid="Result">Result : {Result}</h3>
        }

    </div>
  )
}

export default Calculator