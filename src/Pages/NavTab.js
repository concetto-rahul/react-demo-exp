import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

const NavTab=()=>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/product">Product</Link></Nav.Link>
                    <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavTab;