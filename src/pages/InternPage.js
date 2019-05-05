import React, { Component } from 'react';
import '../App.css';



import NewUserModal from '../classes/NewUserModal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BusinessCard from '../classes/BusinessCard';





class InternPage extends Component {

  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <div className="InternPage">
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <header className="App-header">
                <p>intern page</p>
                
                <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <div class="BusinessCards row">
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
        </div>

        <NewUserModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
            </header>
           
        </div>
    );
  }
}




export default InternPage;