import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Container, Button, Form } from "react-bootstrap";
import "./CreatePostModal.css";
import MakePost from "../MakePost/MakePost.js";
import API from "../../utils/Api";

function CreatePostModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    //update tittle in posts 
    const updateTitle = e =>{
        e.preventDefault()
        setTitle(e.target.value) 
    }

    //update text:body in posts
    const updateText = e =>{
        e.preventDefault()
        setText(e.target.value) 
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create a Post!
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {/* Post Title Form */}
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Create a Post!</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange={updateTitle}/>
            </Form.Group>
            {/* Post Body Form */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Text" value={text} onChange={updateText}/>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default CreatePostModal ;