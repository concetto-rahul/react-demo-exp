import { Alert } from "react-bootstrap";

const Cardcmp=(props)=>{
    return(
        <>
            <Alert key={props.idx} variant={props.variant}>
                This is a {props.variant} alert—check it out!
            </Alert>
        </>
    )
}

export default Cardcmp;