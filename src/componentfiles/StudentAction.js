import { Component } from "react";
import Student from "./Student";


class StudentAction extends Component{

    constructor(){
        super();
        this.state={
            status:true
        }
    }

    render(){
        return(
            <div>
                {this.state.status?<Student />:<h1>Removed</h1>}
                <button onClick={()=>this.setState({status:!this.state.status})}>Toggle Action</button>
            </div>
        )
    }

}

export default StudentAction;