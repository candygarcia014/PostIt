import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCardFull from "./../../components/PostCardFull/PostCardFull";
import CategoryWidget from "./../../components/CategoryWidget/CategoryWidget";
import CategoryMobile from "./../../components/CategoryMobile/CategoryMobile";
import { Container, Row, Col } from "react-bootstrap";
import BackToTop from "../../components/BackToTop/BackToTop";
import "./PostPage.css";
import MakeComment from "../../components/MakeComment/MakeComment";
import Comments from "../../components/Comments/Comments";
import PostCard from "./../../components/PostCard/PostCard";
import MakePost from "../../components/MakePost/MakePost";
import API from "../../utils/Api";

const PostPage = () => {
  const { postId } = useParams();
  //need container to display postdata on the postpage
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    console.log(postId);
    getPost(postId);
  }, []);

  const getPost = async (id) => {
    const res = await API.getSinglePost(id);
    console.log(res);
    setPostData(res.data);
    setCommentData(res.data.comments);
  };

  if (!postData) return <h1>Loading...</h1>;

  console.log(postData);
  console.log(commentData);

  return (
    <Container fluid className="forum-container">
          {/* // Container below holds the post on the PostPage above the comments */}

          <Container>
            <Row>
              <Col xs={12}>
                <PostCardFull
                  title={postData.title}
                  user={postData.user}
                  date={postData.date}
                  body={postData.body}
                />
              </Col>
            </Row>
          </Container>
          {/* closing the container */}


        {/* truncated posts */}
        {/* <Col xs={9}> */}
        <Container>
          {commentData.map(({ body, user, date, _id }) => (
            <Row key={_id}>
              <Col xs={12}>
                <Comments
                  commentId={_id}
                  commentDate={date}
                  commentUsername={user}
                  commentBody={body}
                />
              </Col>
            </Row>
          ))}

          <Row>
            <Col xs={12}>
              <MakeComment postId={postId} setCommentData={setCommentData} />
            </Col>
          </Row>
        </Container>
          
        {/* </Col> */}


      <BackToTop />
    </Container>
  );
};

export default PostPage;
