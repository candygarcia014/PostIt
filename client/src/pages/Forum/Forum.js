import React, { useEffect, useState } from 'react';
import PostCard from './../../components/PostCard/PostCard';
import CategoryWidget from './../../components/CategoryWidget/CategoryWidget';
import CategoryMobile from './../../components/CategoryMobile/CategoryMobile';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from '../../components/BackToTop/BackToTop';
import './Forum.css';
import OtherWidgets from '../../components/OtherWidgets/OtherWidgets';
import MakePost from '../../components/MakePost/MakePost';
import Api from "../../utils/Api"



//fake data placeholders 

// const fakeData = [
//   {
//     date: 'October 10, 1992',
//     time: '10:30pm',
//     username: 'shannisnax',
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
//     title: 'OMG Skin Care',
//     id: 1
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
//     title: 'What in the world is eye cream?',
//     id: 2
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Face wash yay or nay?',
//     id: 3
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Who uses manscape products?',
//     id: 4
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Found the best beard oil ever wow!',
//     id: 5
//   }
// ]

const Forum = () => {
  const [data, setData] = useState();
  const [username, setUsername] = useState();
//useEffect prevents it from running more than once 
  useEffect(() => {
    getAllPost();
    setUsername(JSON.parse(localStorage.getItem('username')))
    //run what is in useEffect again / refresh the data and poppulate new posts at the top. 
  }, [data]);
//this is the API to get all posts on forum pg
  const getAllPost = async () => {
    try {
      const { data } = await Api.getPosts();
      setData(data);
    } catch(err) {
      console.log(err)
    }
  };
  //const data = Api.getPosts()

  //to check if data is poppulating, if not populating it will show the loading componenet  
  if(!data) return <h1>Loading...</h1>
  if(!username) return <h1>Loading...</h1>


//sorts tru the array of posts and puts them in chronological order from newest to oldest
 
  return (
    <Container fluid className="forum-container">
      <Row>

        {/* left side widgets */}
        <Col xs={2} sm={12} lg={2}>
          <Row>
            <Col xs={12} className="category-desktop">
              <CategoryWidget />
            </Col>
            <Col xs={12} className="category-mobile">
              <CategoryMobile />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

        {/* posts */}
        <Col xs={8} sm={12} lg={8}>
            <Row>
              <Col xs={12}>
                <MakePost username={username.username}/>
              </Col>
            </Row>
            {/* //these are the requirements for the posts */}
            {data.map(({title, body, username, date, _id}) => (           
            <Row>
              <Col xs={12}>
                <PostCard
                  key={_id} 
                  id={_id}
                  title={title} 
                  date={date} 
                  username={username} 
                  body={body}
                />
              </Col>
            </Row>
          ))}
        </Col>

        {/* right side widgets */}
        <Col xs={2} sm={12} lg={2}>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

      </Row>

    <BackToTop />
  
  </Container>
)};

export default Forum;
