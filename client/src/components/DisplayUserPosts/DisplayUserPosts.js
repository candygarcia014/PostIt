import React from "react";
import { Card } from "react-bootstrap";
import '../DisplayUserPosts/DisplayUserPosts.css'

function DisplayUserPosts() {
  return (
    <div>
      <Card className="UserPosts">
        <Card.Header>My Posts</Card.Header>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>

    </div>
  );
}

export default DisplayUserPosts;
