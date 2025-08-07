// import UserList from './API/UserList'
// import './App.css'

// function App() {
  

//   return (
//    <div>
//     <h2>API Fetching in React :</h2>
//     <UserList/>
//    </div>
//   )
// }

// export default App


//----------------------------second user list----------------
// import SecondUserList from './API/SecondUserList'
// import './App.css'

// function App() {
  

//   return (
//    <div>
//     <h2>API Fetching in React :</h2>
//     <SecondUserList/>
//    </div>
//   )
// }

// export default App

//-------------------------axios---------------------------
// import UserListAxios from './API/UserListAxios'
// import './App.css'

// function App() {
  

//   return (
//    <div>
//     <h2>API Fetching in React :</h2>
//     <UserListAxios/>
//    </div>
//   )
// }

// export default App

//--------------------error handling---------------------
// import FirstError from './error/FirstError'
// import './App.css'

// function App() {
  

//   return (
//    <div>
//     <h2>Error Handling :</h2>
//    <FirstError name="sameeksha"/>
//    </div>
//   )
// }

// export default App

//--------------------------error boundry----------------------
import { useState } from 'react'
import FirstError from './ErroBoundry/FirstError'
import ErrorBoundry from './ErroBoundry/ErrorBoundry'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1> Error Boundry</h1>
    <ErrorBoundry>
      <FirstError name="samee"/>
    </ErrorBoundry>
    
   </div>
  )
}

export default App

