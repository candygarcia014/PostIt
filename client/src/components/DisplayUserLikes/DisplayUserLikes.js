import React from "react";
import { Card } from "react-bootstrap";
import '../DisplayUserLikes/DisplayUserLikes.css'



function DisplayUserLikes() {
  return (
    <div>
      <Card className="UserLikes">
        <Card.Header>My Likes</Card.Header>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
}

export default DisplayUserLikes;
