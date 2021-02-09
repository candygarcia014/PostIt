import React from 'react';
import StoryCard from './../../components/StoryCard/StoryCard';
import DevCard from './../../components/DevCard/DevCard';
import { Container, Row, Col } from 'react-bootstrap';
import DevImage from './../../components/DevImage/DevImage';
import developers from '../../developers.json'
import DevInfoButton from '../../components/DevInfoButton/DevInfoButton';


const OurStory = (props) => {
  return (
    <Container>

      <div>
        <h1 style={{ color: "white" }}>Our Story</h1>
      </div>

      {/* Card for Our Story */}
      <Row>
        <Col xs={8} md={8}>
          <StoryCard />
        </Col>
      </Row>

      <div>
        <h1 style={{ width: "33%", color: "white" }}>Meet the Developers!</h1>
      </div>


      {developers.map((dev, i) => (
        <Row className={i % 2 === 0 ? "" : "d-flex flex-row-reverse"} style={{height:'15rem'}}>
          <Col xs={3}>
            <DevImage source={dev.image} className={i % 2 === 0 ? "dev-image-left" : "dev-image-right"} />
            <div className="devInfo">
              <h1 style={{color: "white"}}>{dev.name}</h1>
              <DevInfoButton 
              name={dev.name}
              github={dev.github}
              linkedin={dev.linkedin}/>
            </div>
          </Col>

          <Col xs={9} className="my-auto">
            {/* <h1 className="dev-name" style={{ width: "20%", color: "#c4c4c4" }}>{dev.name}
              <DevInfoButton
                name={dev.name}
                github={dev.github}
                linkedin={dev.linkedin}
              />
            </h1> */}

          </Col>
        </Row>
      ))}
    </Container>

  );
};

export default OurStory;


