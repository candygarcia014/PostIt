// Comments that appear on truncated post page and inside comment modal
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Comments.css";

const Comments = (props) => {
  const [user, setUser] = useState(props.commentUsername.username);

  return (
    <Container>
      <Card className="p-0 my-2" id="CommentBody">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted meta-data-date-time meta-data">
            <span className="meta-data-username">{user}</span> |{" "}
            {props.commentDate}
          </Card.Subtitle>
          <Card.Text>{props.commentBody}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Comments;
