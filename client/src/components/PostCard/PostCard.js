// Post component on the Forum page!!

import React, {useState} from 'react';
import './PostCard.css';
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import CommentModal from '../CommentModal/CommentModal.js';


const PostCard = (props) => {
    const history = useHistory();            
    const [postid, setPostid] = useState(0);    
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(props.user)
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

    const handleComment = e =>{
        const id  = e.target.getAttribute("data-id");
        setPostid(id);
        handleShow();
    } 
  

    const handleClose = () => {
        setShow(false);};
    const handleShow = () => setShow(true);
    return (
        <>
        <Card className="p-0 my-2" id="PostBody">
        <Card.Body>
            <Link to={`/post/${props.id}`}><Card.Title>{props.title}</Card.Title></Link>

            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                <span className="meta-data-username">{user.username}</span> | {props.date} 
            </Card.Subtitle>
            <Card.Text>
                {truncatedPost}
            </Card.Text>
            <ButtonGroup className="comment-share-button">
            <Button variant="primary" as="input" type="button" value="Comments" data-id={props.id} onClick={handleComment}/>{' '}

            </ButtonGroup>           
        </Card.Body>
        </Card>
        <CommentModal
            onHide = {handleClose}
            handleClose = {handleClose}
            show = {show}
            postid = {postid}
            />
        </>
    )};

export default PostCard;
