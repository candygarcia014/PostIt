import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage';
import developers from '../../developers.json'

// class OurStory extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     developers
//   };

const OurStory = (props) => {
  return (
  <Container>
    
    <div>
      <h1>Our Story</h1>
    </div>

    {/* Card for Our Story */}
    <Row>
      <Col xs={8} md={8}>
        <StoryCard />
      </Col>
    </Row>

    <div>
      <h1 style={{width: "33%"}}>Meet the Developers!</h1>
    </div>


    {developers.map((dev, i) => (
          <Row className={i % 2 === 0 ? "" : "d-flex flex-row-reverse"}>
          <Col xs={3}>
            <DevImage source={dev.image} className={i % 2 === 0 ? "dev-image-left" : "dev-image-right"} />
          </Col>
          
          <Col xs={9}  className="my-auto">
            <DevCard 
              name={dev.name}
              github={dev.github}
              linkedin={dev.linkedin} />
          </Col>
        </Row>
    ))}
  </Container>

  );
};

export default OurStory;


