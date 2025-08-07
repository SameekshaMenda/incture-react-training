// import React from 'react'
// // import Data from './Data'

// import PropComp from './PropComp'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <h2>React With TypeScript</h2>
//       {/* <Data/> */}
//       <PropComp name="Sameeksha"/>
//     </div>
//   )
// }

// export default App

//------------------------button------------------------------
// import Button from './Button'
// import './App.css'

// function App() {

//   const handleClick = () => {
//     alert("Button Clicked");
//     console.log("clicked")
//   }
//   return (
//     <div>
//       <h2>React With TypeScript</h2>
//       <Button label='click' onClick={handleClick}/>
//       <Button label='disabled Button' onClick={handleClick} disabled/>
//     </div>
//   )
// }

// export default App

//----------------------------card------------------------------
// import Card from './Card'
// import './App.css'

// function App() {

//   return (
//     <div>
//       <h2>React With TypeScript</h2>
//       <Card>
//         <h3> Card Title</h3>
//         <p>This is a simple card with custom styles...</p>
//       </Card>

//       <Card style={{background: 'black', marginTop: '20px', color: "white"}}>
//         <h3> Styled Card </h3>
//         <p>This is a card has custom styles passed via  props...</p>
//       </Card>
//     </div>
//   )
// }

// export default App
//-------------------state------------------------------------
// import StateComp from './StateComp'
// import './App.css'

// function App() {

//   return (
//     <div>
//       <h2>React With TypeScript</h2>
//      <StateComp/>
//     </div>
//   )
// }

// export default App

//--------------------------forms----------------------------------------
import FormComp from './FormComp'
import './App.css'

function App() {

  return (
    <div>
      <h2>React With TypeScript</h2>
     <FormComp/>
    </div>
  )
}

export default App