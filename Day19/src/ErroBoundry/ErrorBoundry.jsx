import React, {Component} from "react";

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false 
        };
    }
    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error,errorInfo){
        console.log("Error Caught by error boundry: ", error, errorInfo);
    }

    render() {
        if(this.state.hasError){
            return <h2> Something went wrong...... PLease try Again Late...</h2>
        }

        return this.props.children;
    }
}
export default ErrorBoundry;