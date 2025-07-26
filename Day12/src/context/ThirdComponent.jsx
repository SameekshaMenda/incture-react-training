// import React from 'react'
// import SecondComponent from './SecondComponent'
// function ThirdComponent(props) {
//   return (
//     <div>
//         <h2>Third Component</h2>
//         <h2>welcome : {props.userName}</h2>
        
//     </div>
//   )
// }

// export default ThirdComponent

//-----------------------------------------
import { useContext } from "react"
import { UserContext } from "./UserContext"; 
function ThirdComponent() {
    const userName = useContext(UserContext);
  return (
    <div>
        <h2>Third Component</h2>
        <h2>welcome : {userName}</h2>
        
    </div>
  )
}

export default ThirdComponent