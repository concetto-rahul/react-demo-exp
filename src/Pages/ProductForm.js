import {useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap'
import { withRouter } from 'react-router';
// import { Redirect } from 'react-router-dom';

function ProductForm(props){
    let productId=props.match.params.id;

    const [name,setName]=useState("");
    const [sku_code,setSkuCode]=useState("");
    const [description,setDescription]=useState("");
    const [errors,setErrors]=useState([]);
        
    const saveFormData=(e)=>{
        e.preventDefault();
        setErrors([]);

        let postdata={"id":productId,name,sku_code,description};

        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2xhcmF2ZWwtZGVtb1wvcHVibGljXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjMyNzUwODMyLCJleHAiOjE2MzI3NTQ0MzIsIm5iZiI6MTYzMjc1MDgzMiwianRpIjoiYWhrdWFMZDc1c1NkTHlzUyIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.nEl81W2Cuz0126yyi3w1Y86lx6Hzyv5YBRor7aqP2Dw'
             },
            body: JSON.stringify(postdata)
        };

        fetch('http://localhost/laravel-demo/public/api/product/update/'+productId,requestOptions).then((result)=>{
            result.json().then((resp)=>{
                if(!resp.success){
                    setErrors(resp.data)
                }
                if(resp.success){
                    props.history.push('/product');
                    // return <Redirect to="/product"/>
                }
            })
        })
    }

    useEffect(()=>{
        fetch('http://localhost/laravel-demo/public/api/product/edit/'+productId).then((result)=>{
            // console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
                if(resp.data){
                    setName(resp.data.name);
                    setSkuCode(resp.data.sku_code);
                    setDescription(resp.data.description);
                }
            })
        })
    },[]);
    return (
        <>
            <Form className="mt-5" method="post" onSubmit={saveFormData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} isInvalid={!!errors.name}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.name?errors.name[0]:""}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSKUCode">
                    <Form.Label>SKU Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item SKU Code" value={sku_code} onChange={(e)=>setSkuCode(e.target.value)}  isInvalid={!!errors.sku_code}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.sku_code?errors.sku_code[0]:""}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type item description"  value={description} onChange={(e)=>setDescription(e.target.value)}  isInvalid={!!errors.description}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.description?errors.description[0]:""}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default withRouter(ProductForm);