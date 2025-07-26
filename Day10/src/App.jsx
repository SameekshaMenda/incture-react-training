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
import React , {Component} from "react"
import ChildComponent from "./Day10/assignment/childComponent"

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      showChild : true,
      appState : 0
    };
  }

  toggleChildComponent = () => {
    this.setState({showChild: !this.state.showChild});
  };

  componentDidMount(){
    this.interval = setInterval(() => {
           this.setState({appState : this.state.appState + 1});
           console.log("App State Updated:", this.state.appState + 1);
    },5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return(
      <div>
        <h1>React Lifecycle Demo</h1>
        <button onClick={this.toggleChildComponent}> Toggle Child Component</button>
        {this.state.showChild && <ChildComponent/>}
      </div>
    )
  }

}


export default App