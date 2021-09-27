import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const noImageURL="/noimageproduct.png";

function ProductList(props){
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.data.imageviewfile?"http://localhost/laravel-demo/public/"+props.data.imageviewfile:noImageURL}/>
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>{props.data.description}</Card.Text>
                    <Link to={"/product/edit/"+props.data.id}>
                        <Button variant="primary">View</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductList;