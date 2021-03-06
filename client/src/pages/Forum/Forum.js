import React, { useEffect, useState } from "react";
import PostCard from "./../../components/PostCard/PostCard";
import CategoryWidget from "./../../components/CategoryWidget/CategoryWidget";
import CategoryMobile from "./../../components/CategoryMobile/CategoryMobile";
import { Container, Row, Col } from "react-bootstrap";
import BackToTop from "../../components/BackToTop/BackToTop";
import "./Forum.css";
// import MakePost from "../../components/MakePost/MakePost";
import Api from "../../utils/Api";
import Tags from "../../components/Tags/Tags";
// import CommentModal from '../CommentModal/CommentModal.js';
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal.js";
import { CloudWatchEvents } from "aws-sdk";

const Forum = () => {
  const [data, setData] = useState();
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem('username')));
  const [liked,setLiked] = useState([]);

   
//useEffect prevents it from running more than once 
  useEffect(() => {
    try{
      getAllPost();
      getUserLikes();
    } catch(err){
      console.log(err);
    }
    //run what is in useEffect again / refresh the data and poppulate new posts at the top. 
  }, [username]);

  useEffect(()=>{},[data])
  //this is the API to get all posts on forum pg
  const getAllPost = async () => {
    try {
      const { data } = await Api.getPosts();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{},[liked])
  
  const getUserLikes = async () =>{
    try{
      const res = await Api.getUser(username.id);
      setLiked(res.data.likes);
    } catch(err) {
      console.log(err)
    }
}

  //to check if data is poppulating, if not populating it will show the loading componenet
  if (!data) return <h1 style = {{color:"whitesmoke"}}>Loading...</h1>;
  if (!username) return <h1 style = {{color:"whitesmoke"}}>Loading...</h1>;

  //sorts tru the array of posts and puts them in chronological order from newest to oldest
  

  return (
    <Container fluid className="forum-container">
      <Row>
        {/* left side widgets */}
        <Col xs={2} sm={2} lg={2}>
          <Row>
            <Col xs={12} className="category-desktop">
              {/* <CategoryWidget /> */}
              <CreatePostModal user={username.id} getAllPost={getAllPost}/>
              <Tags setData={setData}/>
            </Col>
            {/* <Col xs={12} className="category-mobile">
              <CategoryMobile />
            </Col> */}
          </Row>
        </Col>

        {/* posts */}
        <Col xs={12} sm={12} lg={10} style={{display:'flex', flexFlow:'row wrap'}}>

          {/* //these are the requirements for the posts */}
          {data.map(({ title, body, user, date, _id, image }) => (
            
              
                <PostCard
                  className='StyledPostCard'
                  key={_id}
                  id={_id}
                  title={title}
                  date={date}
                  user={user}
                  body={body}
                  liked={liked}
                  curruser={username.id}
                  setLiked={setLiked}
                  getUserLikes={getUserLikes}
                  image={image}
                />
              
            
          ))}
        </Col>
        

        {/* right side widgets */}
        {/* <Col xs={12} sm={12} lg={2}>
          <Row>
            <Col xs={12}></Col>
          </Row>
        </Col> */}
      </Row>

      {/* <BackToTop /> */}
    </Container>
  );
};

export default Forum;
