import React,{Component} from "react";

class TimerComponent extends Component{

    constructor(props){
        super(props);  //refers to super class i.e component class
        this.state = {
            seconds : 0
        };
        console.log("Constructor called...");
    }

    componentDidMount(){
        console.log("Timer Component Mounted...");
        this.interval = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1});
        }, 1000);  //rendered twice due to strictmode

    }

    componentWillUnmount(){
        console.log("Timer Component Will Unmount. CLearing interval...");
        clearInterval(this.interval);  //rendered twice due to strictmode

    }
    render(){
        return(
            <div>
                <h2>Timer Component</h2>
                <h2> Timer : {this.state.seconds} seconds</h2>
            </div>
        )
    }

}
export default TimerComponent