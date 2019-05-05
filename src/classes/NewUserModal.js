import React, { Component } from 'react';
import '../App.css';
import InternPage from '../pages/InternPage';
import BusinessPage from '../pages/BusinessPage';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


import firebaseRef from './firebase.js';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {addNewUser} from '../userFunctions/addNewUser';


class NewUser extends Component {

  constructor(...args) {
    super(...args);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: null,
      address: null,
      address2: null,
      city: null,
      state: null,
      zip: null,
      subscribe: false
    }
    this.handleChange = this.handleChange.bind(this);

    
  }
  componentDidMount() {
    firebaseRef.auth().onAuthStateChanged(function(user) {

      if (user) {
        var db = firebaseRef.firestore();
        addNewUser(user, db);
      } else {
        console.log("no user signed in");
      }
      
    });
  }

  handleSubmit(event) {
    var db = firebaseRef.firestore();
    db.collection("testCollection").doc("handleSubmitTest3").set({
      displayName: this.state.email
    })
    .then(function() {
      console.log("Document written");

    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  handleChange(event, variable) {
    this.setState({email: event.target.id})
    // var db = firebaseRef.firestore();
    // db.collection("testCollection").doc("handleChangeTest1").set({
    //   displayName: event.target
    // })
    // .then(function() {
    //   console.log("Document written");

    // })
    // .catch(function(error) {
    //   console.error("Error adding document: ", error);
    // });
  }
  render() {
    return (

        <div className="NewUser">
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            
            {/* <header className="App-header"> */}
            <div>
              <p>Enter some more info about yourself, intern</p>
                
              <Button variant="primary" href='/BusinessPage'>I'm actually a business</Button>

              <Form
                onSubmit={e => this.handleSubmit(e)}
              >
  <Form.Row name="email">
    <Form.Group as={Col} controlId="formGridEmail" name="email">
      <Form.Label name="email">Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
    </Form.Group>

    
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Subscribe for updates" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;

            </div>
              
            
            {/* </header> */}
        </div>
    );
  }
}
class NewUserModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hello, Intern
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <NewUser/>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewUserModal