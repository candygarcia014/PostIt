import React from 'react';
import './PostCardFull.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';



const PostCardFull = (props) => {

    const handleShare = () => {
        const getUrl = window.location.href
        console.log(getUrl)
        }


    return (
    
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                <span className="meta-data-username">{props.username}</span> | {props.date} 
            </Card.Subtitle>
            <Card.Text>
                {props.body}
            </Card.Text>
            <ButtonGroup className="comment-share-button">
            {/* <Button as="input" type="button" value="Comment" data-id={props.id}/>{' '} */}
            {/* need to add popout  */}
            <Button onClick={ handleShare }  as="input" type="submit" value="Share" />{' '}
            </ButtonGroup>    
                 
        </Card.Body>
        </Card>
         
    )};

export default PostCardFull;
