import React, {Component} from "react";

class ChildComponent extends Component{
     constructor(props){
        super(props);
        console.log("ChildComponent : Constructor")
        this.state = {
            count: 0,
            seconds: 0
        };
    }

    componentDidMount(){
        console.log("ChildComponent : Component Did Mount");
        this.interval = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState){
         console.log("ChildComponent : Component Did Mount");
         if (this.state.value !== this.count)
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