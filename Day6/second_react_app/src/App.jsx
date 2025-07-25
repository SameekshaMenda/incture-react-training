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

//---------------------------------------------Day7------------------------------------------
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

//-------------------------------------Assignment to do counter app--------------------------------
// import Counters from "./Day7/Assignment/Counters"
// function App() {
//   const inputVal = 10;
//   return (
//     <>
//      <div>
//        <Counters input={inputVal}/>
//      </div>
//     </>
//   )
// }

// export default App

//------------------------------------Day8-------------------------------------------
// import Firstevent from "./Day8/Firstevent";
// function App() {
  
//   return (
//     <>
//      <div>
//        <Firstevent/>
//      </div>
//     </>
//   )
// }

// export default App

//------------------------------------Day9------------------------------------
// import FirstList from "./Day9/FirstList"
// function App() {
  
//   return (
//     <>
//      <div>
//        <FirstList/>
//      </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------------------------------
// import SecondList from "./Day9/SecondList"
// function App() {
  
//   return (
//     <>
//      <div>
//        <SecondList/>
//      </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------------------------------
// import EmployeeList from "./Day9/EmployeeList"
// function App() {
  
//   return (
//     <>
//      <div>
//        <EmployeeList/>
//      </div>
//     </>
//   )
// }

// export default App


//--------------------------------------------------------------------------------
// import CourseList from "./Day9/CourseList"
// function App() {
  
//   return (
//     <>
//      <div>
//        <CourseList/>
//      </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------------------------------------
// import TableList from "./Day9/TableList"
// function App() {
  
//   return (
//     <>
//      <div>
//        <TableList/>
//      </div>
//     </>
//   )
// }

// export default App

//---------------------------bootstrap----------------------------------------------------
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BootStrapTable from "./Day9/BootStrapTable";
// function App() {
  
//   return (
//     <>
//      <div>
//        <BootStrapTable/>
//      </div>
//     </>
//   )
// }

// export default App

//----------------------------------------------------------------
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NameList from "./Day9/NameList";
// function App() {
  
//   return (
//     <>
//      <div>
//        <NameList/>
//      </div>
//     </>
//   )
// }

// export default App

//=-----------------------------------------day 10----------------------------------
// import LifeCycleFirst from "./Day10/life_cycle_component/LifeCycleFirst"
// function App() {
  
//   return (
//     <>
//      <div>
//        <LifeCycleFirst/>
//      </div>
//     </>
//   )
// }

// export default App
//-----------------------------------------------------------------------------------
// import LifeCycleSecond from "./Day10/life_cycle_component/LifeCycleSecond"
// function App() {
  
//   return (
//     <>
//      <div>
//        <LifeCycleSecond/>
//      </div>
//     </>
//   )
// }

// export default App

//------------------------------------------------------------------------
// import LifeCycleFourth from "./Day10/life_cycle_component/LifeCycleFourth"
// function App() {
  
//   return (
//     <>
//      <div>
//        <LifeCycleFourth/>
//      </div>
//     </>
//   )
// }

// export default App

//--------------------------------------------------------------------------   
// import React , {Component} from "react"
// import ChildComponent from "./Day10/assignment/childComponent"

// class App extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       showChild : true,
//       appState : 0
//     };
//   }

//   toggleChildComponent = () => {
//     this.setState({showChild: !this.state.showChild});
//   };

//   componentDidMount(){
//     this.interval = setInterval(() => {
//            this.setState({appState : this.state.appState + 1});
//            console.log("App State Updated:", this.state.appState + 1);
//     },5000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.interval);
//   }

//   render(){
//     return(
//       <div>
//         <h1>React Lifecycle Demo</h1>
//         <button onClick={this.toggleChildComponent}> Toggle Child Component</button>
//         {this.state.showChild && <ChildComponent/>}
//       </div>
//     )
//   }

// }


// export default App


//------------------------------day11--------------------------------
// import HookFirstComp from "./Day11/HookFirstComp"
// function App() {
  
//   return (
//     <>
//      <div>
//        <HookFirstComp/>
//      </div>
//     </>
//   )
// }

// export default App

//-----------------------------------------------------------
// import UseEffectComponent from "./Day11/UseEffectComponent"
// function App() {
  
//   return (
//     <>
//      <div>
//        <UseEffectComponent/>
//      </div>
//     </>
//   )
// }

// export default App
//-----------------------------------------------------------

// import UseEffectSecond from "./Day11/UseEffectSecond"
// function App() {
  
//   return (
//     <>
//      <div>
//        <UseEffectSecond/>
//      </div>
//     </>
//   )
// }

// export default App

//---------------------------------------------------

// import UseEffectThird from "./Day11/UseEffectThird"
// function App() {
  
//   return (
//     <>
//      <div>
//        <UseEffectThird/>
//      </div>
//     </>
//   )
// }

// export default App

//----------------------------------------------------------------
// import UseMemoFirst from "./Day11/UseMemoFirst"
// function App() {
  
//   return (
//     <>
//      <div>
//        <UseMemoFirst/>
//      </div>
//     </>
//   )
// }

// export default App

//----------------------------------------------------
// import UseRefFirst from "./Day11/UseRefFirst"
// function App() {
  
//   return (
//     <>
//      <div>
//        <UseRefFirst/>
//      </div>
//     </>
//   )
// }

// export default App

//-----------------------------------------------------------------
// import Parent from "./Day11/Parent"
// function App() {
  
//   return (
//     <>
//      <div>
//        <Parent/>
//      </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------
import FirstCounter from "./Day11/CustomHook'/FirstCounter"
import SecondCounter from "./Day11/CustomHook'/SecondCounter"
function App() {
  
  return (
    <>
     <div>
       <FirstCounter/>
       <SecondCounter/>
     </div>
    </>
  )
}

export default App