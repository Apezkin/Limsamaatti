import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../App.css";

class AddDepModal extends Component {

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        align="middle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmation for buying item: {this.props.buying}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">Are you sure?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={(this.props.buyButton)}
            align="center"
          >
            confirm
          </Button>
          <Button variant="danger" onClick={this.props.onHide} align="center">
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddDepModal;