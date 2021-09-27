import { Fragment } from "react";

const Title=(props)=>{
    return(
        <Fragment key={1}>
            { props.titleName?<h1>data.titleName</h1>:null }
            { props.titleName2?<h2>data.titleName2</h2>:null }
        </Fragment>
    )
}

export default Title;