import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Example1 from './codehookex/Example1';
// import {Container,Row } from 'react-bootstrap';

// import User from './User';
// import Userclass from './Userclass';
// import Forminput from './Forminput';
// import ButtonAction from './ButtonAction';
// import Formfields from './Formfields';
// import Alertcom from './Alertcom';
// import StudentAction from './componentfiles/StudentAction';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Container>
      <Example1 />
    </Container> */}
    {/* <StudentAction /> */}
    {/* <Alertcom name="Hello Rahul"/> */}
    {/* <Formfields />
    <ButtonAction />
    <Forminput />
    <User name={"xyz abc"} countNumber={1} />
    <Userclass name={"abcd xyz"} countNumber={10}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
