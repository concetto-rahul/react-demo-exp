import { Component } from "react";

class Student extends Component{
    constructor(){
        super()
    }

    // componentDidMount(){
    //     console.log('component set');
    // }

    // componentDidUpdate(){
    //     console.log('component update');
    // }

    // shouldComponentUpdate(){
    //     console.log('should component update');
    // }

    componentWillUnmount(){
        console.log('component removed');
    }

    render(){
        return <h1>Student {new Date().toLocaleTimeString()}</h1>
    }
}

export default Student;