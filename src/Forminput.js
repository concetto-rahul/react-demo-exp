import {useState} from "react";

const Formview=()=>{
    const [inputdata,setInputdata]=useState(null);
    const [printData,setPrintData]=useState(false);

    const updateinputstate=(val)=>{
        setInputdata(val);
        setPrintData(false);
    }

    return(
        <div>
            <h5>{printData?inputdata:null}</h5>
            <input type="text" onChange={(e)=>updateinputstate(e.target.value)}/>
            <button onClick={()=>setPrintData(true)}>Print Data</button>
        </div>
    ) 
}

export default Formview;