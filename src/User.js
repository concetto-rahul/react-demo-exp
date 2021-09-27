import {useState} from 'react';

const User=(props)=>{
    const [name,setName]=useState(props.name);
    const Useralert=name=>{
        name="Rahul Patil";
        setName(name);
        alert('hello user alert '+name);
    };    
    const User1=()=><button onClick={()=>Useralert(name)}>Name Change</button>

    const [countNumber,setCountNumber]=useState(props.countNumber);
    const UpdateCountNUmber=()=>{
        setCountNumber(countNumber+1);
    }; 
    const NumberCountClick=()=><button onClick={UpdateCountNUmber}>Number Count</button>

    return(
        <div>
            <h1>User H1 function  {name} <User1 /></h1>
            <h2>User H2 function  {countNumber} <NumberCountClick /></h2>
        </div>
    )
}
export default User;