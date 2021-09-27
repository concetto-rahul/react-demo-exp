import {useState, useEffect} from 'react';
import { Row,Col,Button,Modal,Table } from 'react-bootstrap';
import Alertcom from '../Alertcom';
import Cardcmp from '../Cardcmp';
import Title from '../Title';
//componentDidMount, componentDidUpdate bootstrap
const Example1=()=>{
    const StudentData=[
        {
            name:"Rahul A",
            email:"a@xyz.com",
            class_name:"10-A"
        },
        {
            name:"Rahul B",
            email:"b@xyz.com",
            class_name:"10-A"
        },
        {
            name:"Rahul C",
            email:"c@xyz.com",
            class_name:"10-B"
        },
        {
            name:"Rahul D",
            email:"d@xyz.com",
            class_name:"10-B"
        }
    ]
    const [welcome,setWelcome]=useState('Welcome to Hook');
    const [countNumber,setcountNumber]=useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        // modalpopup();
        console.log("handleClose")
    }
    const handleShow = () => {
        setShow(true);
        // modalpopup();
        console.log("handleShow")
    }

    function SuccessMessage(props){
        return(
            <>
                <h5>Success Message</h5>
                <props.cmp  idx="success" variant="success"/>
            </>
        )
    }

    function DangerMessage(props){
        return(
            <>
                <h5>Danger Message</h5>
                <props.cmp  idx="danger" variant="danger"/>
            </>
        )
    }

    function InfoMessage(props){
        return(
            <>
                <h5>Info Message</h5>
                <props.cmp  idx="info" variant="info"/>
            </>
        )
    }

    const modalpopup=()=>{
        console.log("modalpopup",show);
        return (
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    useEffect(()=>{
        console.log('use effect countNumber');
    },[countNumber]);

    useEffect(()=>{
        console.log('use effect welcome');
    },[welcome]);

    return(
        <Row>
            <Col lg={12} md={12} xs={12} className="mb-5 mt-5 text-center"><Title titleName="Welcome to Abcd" titleName2="Welcome 2"/></Col>
            <Col lg={12} md={12} xs={12} className="mb-5 mt-5 text-center">
                <SuccessMessage cmp={Cardcmp}/>
                <DangerMessage cmp={Cardcmp}/>
                <InfoMessage cmp={Cardcmp}/>
            </Col>
            <Col lg={6} md={6} xs={12} className="mb-3">
                {modalpopup()}
                <h1>{welcome} {countNumber}</h1>
                <Button variant="primary" className="mr-2" onClick={()=>setWelcome("Hook Concept")}>Update Text</Button>
                <Button variant="success" className="mr-2" onClick={()=>setcountNumber(countNumber+1)}>Update Number</Button>
                <Button variant="warning " onClick={handleShow}>Popup Click</Button>
            </Col>
            <Col lg={6} md={6} xs={12} className="mb-3">
                <Table striped bordered hover size="sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StudentData.map((data,datakey)=>{
                                return (
                                    <tr key={datakey} className={data.class_name=="10-B"?"table-primary":"table-warning"}>
                                        <td>{datakey+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.class_name}</td>
                                        <td><Button variant="info" size="sm" onClick={()=>Alertcom(data)}>View</Button></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default Example1;