// Trunkcated/Extended Post on a new page
import React, { useState } from "react";
import "./PostCardFull.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Card, Row, Col } from "react-bootstrap";
import LikeButton from '../LikeButton/LikeButton'
import PostImage from '../PostImage/PostImage';


const PostCardFull = (props) => {
  const [user, setUser] = useState(props.user.username);

  const handleShare = () => {
    const getUrl = window.location.href;
    console.log(getUrl);
  };

  return (
    <Row>
      <Col xs={12}>
        <Card className="p-0 my-2" id="PostBody">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted meta-data-date-time meta-data">
              <span className="meta-data-username">{user}</span> | {props.date}
            </Card.Subtitle>
            <Card.Text>
              <PostImage image={props.image}/>
              {props.body}</Card.Text>
            <ButtonGroup className="comment-share-button">
              {/* This does not */}
              {props.liked ? (
                <LikeButton
                  key={props.id}
                  id={props.id}
                  liked={props.liked}
                  curruser={props.curruser}
                  setLiked={props.setLiked}
                  getUserLikes={props.getUserLikes}
                />
              ) : null}
              {/* <Button as="input" type="button" value="Comment" data-id={props.id}/>{' '} */}
              {/* need to add popout  */}
              {/* <Button onClick={ handleShare }  as="input" type="submit" value="Share" />{' '} */}
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PostCardFull;
