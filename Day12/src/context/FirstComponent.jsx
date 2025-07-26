
// import SecondComponent from './SecondComponent'
// function FirstComponent(props) {
//   return (
//     <div>
//         <h2>First Component</h2>
//         <SecondComponent userName={props.userName}/>
//     </div>
//   )
// }

// export default FirstComponent

//----------------------------------

import SecondComponent from './SecondComponent'
function FirstComponent() {
  return (
    <div>
        <h2>First Component</h2>
        <SecondComponent />
    </div>
  )
}

export default FirstComponent