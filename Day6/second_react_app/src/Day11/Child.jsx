import { forwardRef } from "react";

function Child(props, ref) {
  return (
    <div>
        <h1>Child Component :</h1>
        <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Child);