import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from './resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class BusinessCard extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (

        <div className="BusinessCard">
        <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <Card style={{ width: '18rem' }}>
  
  <Card.Body>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/95/CatVibrissaeFullFace.JPG" />
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>Go somewhere</Button>
  </Card.Body>
  <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.modalShow}
        onHide={modalClose}
      >
      <Document
          file={pdfFile}
          onLoadError={console.error} 
          renderMode="svg">
          <Page pageNumber={1} height={1200} renderMode="svg"/>
          </Document>
    </Modal>
</Card>
        </div>
    );
  }
}

export default BusinessCard;