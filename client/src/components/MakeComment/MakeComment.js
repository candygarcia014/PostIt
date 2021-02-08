// Create comment on truncated post page
import React, { useState } from "react";
import decode from "jwt-decode";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, ButtonGroup } from "react-bootstrap";
import "./MakeComment.css";
import Api from "../../utils/Api";
import LikeBtn from "../LikeBtn/LikeBtn";

const MakeComment = ({ postId, setCommentData }) => {
  const [text, setText] = useState("");
  //update text:body in comments
  const updateText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  //submit onclick function on "submmit buotton on post card"
  const submit = async (e) => {
    e.preventDefault();
    const { username, id } = decode(localStorage.getItem("token"));
    const data = {
      body: text,
      user: id,
    };
    console.log(data, postId);
    const updatedPost = await Api.createComments(data, postId, id);
    setText("");
    setCommentData(updatedPost.data.comments);
  };

  return (
    <Container>
      <Card className="p-0 my-2" id="MakeComment">
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Create a comment!</Form.Label>
              <Form.Control
                type="text"
                placeholder="Comment"
                value={text}
                onChange={updateText}
              />
            </Form.Group>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <ButtonGroup className="comment-share-button">
                  <LikeBtn />

                  <Button
                    variant="outline-dark"
                    type="submit"
                    // changed classname to comment button, did this ruin anything?
                    className="CommentBtn"
                    onClick={submit}
                  >
                    Comment
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MakeComment;
