// import First from "./first"
// import Second from "./second"
// import Third from "./Third"
// import Fourth from "./Fourth"
//functional component


import Card from "./Day7/Card"

// function App() {
  
//   return (
//     <>
//       <h2>React App With Vite Tool</h2>
//       {/* <First />
//       <Second />
//       <Third />
//       <Fourth /> */
//       }
//       <Card  name="sam" city="mangaluru"/>
//       <Card  name="sameeksha" city="bengaluru"/>
//       <Card  name="sriraksha" city="vitla"/>
//     </>
//   )
// }

// export default App

//---------------------------------------------------------------
// function App() {
  
//    function handleClick() {
//        alert("Function From Parent Componenet");
//      }
//   return (
//     <>
//       <h2>React App With Vite Tool</h2>
//        <Card label="Click Me" onClick={handleClick}/>
//     </>
//   )
// }

// export default App

//------------------------------------------------------
// import Store from "./Store";
// import Counter from "./Counter";
// import ShowHide from "./ShowHide";
// function App() {
  
//   return (
//     <>
//       <Store/>
//       <Counter/>
//       <ShowHide/>
//     </>
//   )
// }

// export default App

//--------------------------------------switching between 2 Components------------------
// import { useState } from "react";
// import First_comp from "./Assignment/First_comp";
// import Second_comp from "./Assignment/Second_comp";
// function App() {
//   const [show, setShow] = useState(true ,);
//   return (
//     <>
//       <div>
        
//         <button onClick={()=> setShow(!show)}>   
//              {show ? "Show First" : "Show Second"}
//         </button>
//         { show && <Second_comp/>}
//         { !show && <First_comp/>}

        
//     </div>
//     </>
//   )
// }

// export default App

//-------------------------------------Assignment--------------------------------
import Counters from "./Day7/Assignment/Counters"
function App() {
  const inputVal = 10;
  return (
    <>
     <div>
       <Counters input={inputVal}/>
     </div>
    </>
  )
}

export default App
