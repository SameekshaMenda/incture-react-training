import React, {Component} from "react";

class LifeCycleFirst extends Component{

    constructor(props)  //initializes state and binds method
    {
        super(props);
        console.log("constructor: Component called...")

        this.state = {
            count : 0
        };
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps() method called ...")
        return null;
    }

    render(){
        console.log("render() called ...");

        return(
            <div>
                <h1>Life Cycle Methods of Class Components :</h1>
                <h3>Count : {this.state.count}</h3> 
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button> //this refers to the current running object
            </div>
        )
    }

    componentDidMount(){
        console.log("compountDidMount() called...");  //rendered twice due to strictmode

    }
}
export default LifeCycleFirst