// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// function App() {


//   return (
//     <BrowserRouter>
//     <Routes>      
//       <Route path="/" element={<Home />} /> {/*Routes is container containing multiple routes*/}
//       <Route path="/profile" element={<Profile />} />{/* The path "/" will render the Home component */}
//     </Routes>
//     </BrowserRouter>

//   )
// }

// export default App

//------------------------------------------------------------------------------------
// import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';
// function App() {


//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} /> 
//         <Route path="/*" element={<Error/>}  />
//         <Route path="/home" element={<Navigate to="/"/>}/>
//         <Route path="/user/:userName" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//------------------------------------------------------------------
// import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';
// function App() {


//   return (
//     <BrowserRouter>
//       <nav style={{ margin: '20px' }}></nav>

//       <NavLink to="/" style={({ isActive }) => ({
//         marginright: '15px',
//         color: isActive ? 'green' : 'blue',
//         fontweight: isActive ? 'bold' : ' normal'
//       })}>
//         Home
//       </NavLink>

//       <NavLink to="/profile" style={({ isActive }) => ({
//         marginright: '15px',
//         color: isActive ? 'green' : 'blue',
//         fontweight: isActive ? 'bold' : ' normal'
//       })}>
//         Profile
//       </NavLink>

//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/*" element={<Error />} />
//         <Route path="/home" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//---------------------------NavLink ---------------------------------
// import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import Profile from './component/Profile';
// import NavBar from './component/NavBar';
// import Error from './component/Error';
// import User from './profile/User';
// import './App.css'; // Assuming you have an App.css for styling
// function App() {


//   return (
//     <BrowserRouter>
//       <nav style={{ margin: '20px' }}></nav>

//       <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>
//        Home
//       </NavLink>
//       <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link link" : "link"}>
//        Profile
//       </NavLink>

//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/*" element={<Error />} />
//         <Route path="/home" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//---------------------------------nested routes-----------------------------------
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Profile from './Nested/Profile';
// import Dashboard from './Nested/Dashboard';
// import Setting from './Nested/Setting'; 
// import './App.css'; 
// function App() {


//   return (
//     <BrowserRouter>
//       <Routes>
      
//         <Route path="/" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="setting" element={<Setting />} />
//           {/* inside nested route, we do not use "/"  for eg "/profile"*/}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//------------------------------------------------------------------------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Product from './SearchQuery/Product';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App