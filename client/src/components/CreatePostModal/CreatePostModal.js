import React, { useState, useEffect, Component } from "react";
import { Modal, Col, Row, Container, Button, Form } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Api from "../../utils/Api";
import decode from 'jwt-decode';
// s3 Imports
import ReactS3 from 'react-s3';
import { uploadFile } from 'react-s3';

import "./CreatePostModal.css";
import MakePost from "../MakePost/MakePost.js";
import API from "../../utils/Api";

// Config for s3
// Needs to be updated with secret keys
const config = {
  bucketName: 'scp-ucla-bc2021',
  dirName: 'PostImage', /* optional */
  region: 'us-west-2',
  accessKeyId: 'AKIAV3L2IG2JAA4V4HPK',
  secretAccessKey: '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',
}


const CreatePostModal = ({ user, getAllPost }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  //update tittle in posts
  const updateTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  //update text:body in posts
  const updateText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  //submit onclick function on "submmit buotton on post card"
  const submit = e =>{
    e.preventDefault();
    const data = {
        body:text, title, user,
    }
    console.log(data);
    const { id } = decode(localStorage.getItem("token"));
    console.log(data, id)
     Api.createPosts(data, id);
     setTitle("");
     setText("");
     getAllPost();


  const Upload = e => {
    e.preventDefault();
    console.log(e.target.file[0]);


  }
}
// class CreatePostModal extends Component {
//   constructor(){
//     super ();
//   }
//   upload(e){
//     console.log(e.target.files[0]);
//   }
// }

  return (
    <>
      <Button variant="primary" id="CreatePostBtn" onClick={handleShow}>
        Create a Post!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Post Title Form */}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={updateTitle}
            />
          </Form.Group>
          {/* Post Body Form */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Text"
              value={text}
              onChange={updateText}
            />
          </Form.Group>

          <Row>
            <Col xs={4}>
              <DropdownMultiselect
                options={["Skin", "Hair", "Body", "Mind", "Style", "Nails"]}
                name="tags"
                placeholder="Tags (select up to 3)"
              />
            </Col>

            {/* S3 File Upload */}
            <Col xs={4}>
              <Form.Group>
              <input type='file' onChange={this.upload} />
                <Form.File id="exampleFormControlFile1" />
              </Form.Group>
            </Col>
            {/* submit button to create a new post */}
            <Col xs={4}>
              <Button
                variant="outline-dark"
                type="submit"
                className="post-button"
                onClick={submit}
              >
                Post
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default CreatePostModal;
