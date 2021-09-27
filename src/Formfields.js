import { useState } from "react";

const Formfields=()=>{
    const[name,setName]=useState("");
    const[selectOption,setSelectOption]=useState("");
    
    const submitformdata=(e)=>{
        e.preventDefault();
        console.log(name,selectOption)
    }

    return(
        <div>
            <h2>Form with multi field</h2>
            <form method="post" onSubmit={(e)=>submitformdata(e)}>
                <input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                <select onChange={(e)=>setSelectOption(e.target.value)}>
                    <option value="">Select option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Formfields;