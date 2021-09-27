import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About_us from './Pages/About_us';
import NavTab from './Pages/NavTab';
import PagenotFound from './Pages/PagenotFound';
import Users from './Pages/Users';
import UserDetail from './Pages/UserDetail';
import { Container} from 'react-bootstrap';
import Product from './Pages/Product';
import ProductForm from './Pages/ProductForm';
function App() {
  return (
    <div className="App">
      <Router>
        <NavTab/>
        <Container>
          <Switch>    
            <Route path="/users/:id/:name"><UserDetail /></Route>  
            <Route path="/users"><Users /></Route>   
            <Route path="/product/edit/:id"><ProductForm /></Route>
            <Route path="/product"><Product /></Route>    
            <Route path="/about-us"><About_us /></Route>
            <Route path="/" exact={true}><Home /></Route>
            <Route path="*"><PagenotFound /></Route>
          </Switch> 
        </Container> 
      </Router>
    </div>
  );
}

export default App;
