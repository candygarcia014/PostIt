import React, { useState } from "react";
import decode from "jwt-decode";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import "./MakeComment.css";
import Api from "../../utils/Api";

const MakeComment = ({ postId, setCommentData}) => {
  const [text, setText] = useState("");
  //update text:body in comments
  const updateText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  //submit onclick function on "submmit buotton on post card"
  const submit = async(e) => {
    e.preventDefault();
    const { username, id } = decode(localStorage.getItem("token"));
    const data = {
      body: text,
      username,
    };
    const updatedPost = await Api.createComments(data, postId, id);
    setText("");
    setCommentData(updatedPost.data.comments)
  };

  return (
    <Card className="p-0 my-2">
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Create a comment!</Form.Label>
            <Form.Control type="text" placeholder="Comment" value={text} onChange={updateText} />
          </Form.Group>
          <Row>
            <Col xs={6}>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Button variant="primary" type="submit" className="post-button" onClick={submit}>
                Comment
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MakeComment;
