// import FirstComponent from './context/FirstComponent';

// function App() {
//   const userName = "Sachin";

//   return (
//     <div>
//            <FirstComponent userName={userName}/>
//     </div>
//   )
// }

// export default App

//----------------------------------
// import { UserContext } from "./context/UserContext";
// import FirstComponent from "./context/FirstComponent";

// const userName = "Sachin";
// function App() {
//   return (
   
//       <UserContext.Provider value={userName}>
//         <div>
//           <FirstComponent/>
//         </div>
//       </UserContext.Provider>
   
//   )
// }

// export default App


//---------------------------
import { ThemeProvider } from "./new_context/ThemeContext";
import FirstComponent from "./context/FirstComponent";
import ThemeToggleComponent from "./new_context/ThemeToggleComponent";

const userName = "Sachin";
function App() {
  return (
   
      <ThemeProvider>
        <h2>Toggle Component</h2>
        <ThemeToggleComponent />
      </ThemeProvider>
   
  )
}

export default App
