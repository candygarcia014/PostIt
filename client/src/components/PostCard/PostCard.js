// Displayed Posts component on the Forum page!!

import React, {useState, useEffect} from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import CommentModal from '../CommentModal/CommentModal.js';
import LikeButton from '../LikeButton/LikeButton'
import PostImage from '../PostImage/PostImage';
import Api from "../../utils/Api";
import decode from 'jwt-decode';



const PostCard = (props) => {    
    const [postid, setPostid] = useState(0);    
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(props.user)
    const truncatedPost = props.body?.substring(0, 200) + "...";
    const[userInfo, setUserInfo]=useState();

    useEffect(() => {
        getUser();
    }, [userInfo]);

    const getUser = async () => {
        const { id } = decode(localStorage.getItem("token"));
        const { data } = await Api.name(id);
        setUserInfo(data);
    };
    
    // This should be postid not user info!!
    if(!userInfo) return <h1>Loading...</h1>
    const { image } = userInfo;



    const handleShare = (id) => {
    const getUrl = window.location
    var baseUrl = getUrl.protocol + "//" + getUrl.host + '/post/' + id;
    console.log(baseUrl)

    document.querySelector("#baseUrl")
    alert('share this link    ' + baseUrl) 

    }

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
            <Link to={`/post/${props.id}`} className="LinkToPost"><Card.Title>{props.title}</Card.Title></Link>

            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                <span className="meta-data-username">{user.username}</span> | {props.date} 
            </Card.Subtitle>
            <Card.Text>
                <PostImage image={image}/>
                {truncatedPost}
            </Card.Text>
            <ButtonGroup className="comment-share-button">
            {
            props.liked ?
            <LikeButton
            key={props.id}
            id={props.id}
            liked={props.liked}
            curruser={props.curruser}
            setLiked={props.setLiked}
            getUserLikes={props.getUserLikes}
            />
            :null
            }
            <Button variant="outline-dark" as="input" type="button" value="Comments" data-id={props.id} onClick={handleComment} className='CommentBtn'/>{' '}

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
