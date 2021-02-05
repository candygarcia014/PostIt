import React, {useState, useEffect} from 'react';
import {Modal, Col, Row, Container} from 'react-bootstrap';
import './CommentModal.css'
import MakeComment from '../MakeComment/MakeComment.js'
import API from '../../utils/Api'
import Comments from '../Comments/Comments.js'

const CommentModal = (props) => {  
    const [commentData, setCommentData] = useState([]);
    useEffect(() => {            
        getComments();
    },[props.postid])

    const getComments = async () => {
        if(props.postid!==0){
            const res = await API.getSinglePost(props.postid);
            setCommentData(res.data.comments);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} className="CommentModal">
            <Modal.Header >
            <Container>
            {commentData?.map(({ body, user, date, _id }) => (
            <Row key={_id}>
              <Col xs={12} lg={12}>
                <Comments commentId={_id} commentDate={date} commentUsername={user} commentBody={body} />
              </Col>
            </Row>))}
            </Container>
            </Modal.Header>

            <Modal.Footer> 
                <MakeComment postId={props.postid} setCommentData= {setCommentData}/>
            </Modal.Footer>
        </Modal>
    )};

export default CommentModal;
