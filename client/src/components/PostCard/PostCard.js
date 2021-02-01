import React from 'react';
import './PostCard.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';


const PostCard = (props) => {


    const history = useHistory();
    const truncatedPost = props.body?.substring(0, 200) + "...";

    const handleShare = (id) => {
    const getUrl = window.location
    var baseUrl = getUrl.protocol + "//" + getUrl.host + '/post/' + id;
    console.log(baseUrl)

    document.querySelector("#baseUrl")
    alert('share this link    ' + baseUrl) 

    }

    const handleredirct = e => {
        const id  = e.target.getAttribute("data-id")
        history.push("/post/" + id);
    };
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                <span className="meta-data-username">{props.username}</span> | {props.date} 
            </Card.Subtitle>
            <Card.Text>
                {truncatedPost}
            </Card.Text>
            <ButtonGroup className="comment-share-button">
            <Button variant="primary" as="input" type="button" value="Comment" data-id={props.id} onClick={handleredirct}/>{' '}
            <Button variant="primary" onClick={() => handleShare(props.id) } as="input" type="submit" value="Share" />{' '}
            </ButtonGroup>           
        </Card.Body>
        </Card>
    )};

export default PostCard;
