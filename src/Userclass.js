import React,{Component} from "react";

class Userclass extends Component{

    constructor(props){
        super(props);
        this.state={
            name:this.props.name,
            countNumber:this.props.countNumber
        }
    }
    
    updateCountNumber(){
        this.setState({countNumber:this.state.countNumber+1});
    }

    updateName(){
        this.setState({name:"Patil"});
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h1>User h1 class {this.state.name} <button onClick={()=>this.updateName()}>Update Name</button></h1>
                <h1>User h1 class {this.state.countNumber} <button onClick={()=>this.updateCountNumber()}>Change Number</button></h1>
            </div>
        )
    }
}

export default Userclass