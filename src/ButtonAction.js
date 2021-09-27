import { useState } from "react";

const ButtonAction=()=>{
    const[status,setStatus]=useState(true);
    return(
        <div>
            {status?<h1>Button Hide,Show and Toggle Text</h1>:null}
            <button onClick={()=>setStatus(true)}>Show Btn</button>
            <button onClick={()=>setStatus(false)}>Hide Btn</button>
            <button onClick={()=>setStatus(!status)}>Toggle Btn</button>
        </div>
    )
}

export default ButtonAction;