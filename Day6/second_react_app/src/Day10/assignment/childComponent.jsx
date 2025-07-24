import React, {Component} from "react";

class ChildComponent extends Component{
     constructor(props){
        super(props);
        console.log("ChildComponent : Constructor")
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        console.log("ChildComponent : Component Did Mount");
    }

    shouldComponentUpdate(nextProps, nextState){
         console.log("ChildComponent : Should Component Update");
         if (this.state.count !== nextState.count)
            return true;
        return false;
         
    }
    

    componentDidUpdate(prevProps, prevState){
         console.log("ChildComponent : Component Did Update");
    }

    componentWillUnmount(){
         console.log("ChildComponent : Component Did Unmount");
         clearInterval(this.interval);
    }

    render(){
        return(
            <div>
               
                <h2> Count : {this.state.count}</h2>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
            </div>
        )
    }
}
export default ChildComponent;