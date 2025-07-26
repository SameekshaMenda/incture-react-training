import React,{Component} from "react";

class LifeCycleSecond extends Component{

    constructor(props){
        super(props);
        this.state = {
            value : 0
        };
        console.log("Constructor called...");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps called...");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponent() method Called...");
        return true;

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate() method called...");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate() method called...");
    }

    componentDidMount(){
        console.log("compountDidMount() called...");  //rendered twice due to strictmode

    }

    render(){
        console.log("render() called...");
        return(
            <div>
                <h1> Updating Phase :</h1>
                <h2> Value : {this.state.value}</h2>
                <button onClick={()=> this.setState({value: this.state.value+1})}>Increment</button>
            </div>
        )
    }
}
export default LifeCycleSecond