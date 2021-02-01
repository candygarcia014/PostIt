import React, { useState, Component } from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import "../PhotoModal/PhotoModal.css";
// import axios from "axios";
import decode from 'jwt-decode';
// import { Alert } from "reactstrap";
import api from "../../utils/Api.js"
class PhotoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      show: null,
    };
  }
  // console.log(this.state);
  handleClose = () => {
    this.setState({ ...this.state, show: false });
  };
  handleShow = () => {
    this.setState({ ...this.state, show: true });
  };
  Upload() {
    const data = new FormData();
    console.log(this.state.selectedFile);
    data.append("file", this.state.selectedFile);
    const userId = decode(localStorage.getItem("token"));
    console.log(data)
    console.log(userId.id)
    api.uploadPhoto(data, userId.id).then(x => this.setState({ ...this.state, show: false}))
          .catch((err) => {
        // then print response status
        alert("upload fail");
        console.log(err);
      });
    // axios
    //   .post({
    //     url: "/upload/" + userId.id.toString(),
    //     data: data,
    //   })
    //   .then(console.log(data))
    //   .catch((err) => {
    //     // then print response status
    //     alert("upload fail");
    //     console.log(err);
    //   });
  }
  onChangeHandler = (event) => {
    var file = event.target.files[0];
    console.log(file);
    this.setState({
      ...this.state,
      selectedFile: file,
    });
  };
  fileUploadHandler = () => {
    // const data = new FormData();
    // console.log(this.state.selectedFile);
    // data.append("file", this.state.selectedFile);
    // console.log(data);
    this.Upload()
    // axios
    //   .post("/api/upload", data)
    //   .then((res) => {
    //     // then print response status
    //     alert("upload success");
    //   })
    //   .catch((err) => {
    //     // then print response status
    //     alert("upload fail");
    //     console.log(err);
    //   });
  };
  render() {
    return (
      <>
        <Button
          variant="outline-secondary"
          onClick={this.handleShow}
          className="PhotoBtn"
        >
          +
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload a Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.File
                  bsCustomPrefix="custom-file-label"
                  id="exampleFormControlFile1"
                  label="Example file input"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={this.fileUploadHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default PhotoModal;