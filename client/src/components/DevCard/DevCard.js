import React from 'react';
import { BsFillPlusSquareFill } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import "./DevCard.css"
import '../../developers.json'



const DevCard = (props) => {
    return (

        <Card className="dev-card" style={{maxHeight: "20rem !important", maxWidth: "50rem" }}>
        
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <BsFillPlusSquareFill /> */}
                    <Card.Text>
                       <a href={props.github}><img className="github" src="https://github.com/ShanniSnax/self-care-pirates/blob/main/client/src/components/images/github-icon.png?raw=true"/></a> 
                    </Card.Text>
                
                
                    <Card.Text>
                       <a href={props.linkedin}><img src="https://github.com/ShanniSnax/self-care-pirates/blob/main/client/src/components/images/linkedin-icon.png?raw=true"/></a> 
                    </Card.Text>

            </Card.Body>
        </Card>
    )
};

export default DevCard;
