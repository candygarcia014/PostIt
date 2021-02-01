import React from 'react';
import Card from 'react-bootstrap/Card';
import "./DevCard.css"
import '../../developers.json'



const DevCard = (props) => {
    return (

        <Card className="dev-card" style={{maxHeight: "20rem !important", maxWidth: "50rem" }}>
        
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            
                <a href={props.github}>
                    <Card.Text>
                       <a href={props.github}><img className="github" src="https://github.com/ShanniSnax/self-care-pirates/blob/main/client/src/components/images/github-icon.png?raw=true"/></a> 
                    </Card.Text>
                </a>
                <a href={props.linkedin}>
                    <Card.Text>
                       <a href={props.linkedin}><img src="https://github.com/ShanniSnax/self-care-pirates/blob/main/client/src/components/images/linkedin-icon.png?raw=true"/></a> 
                    </Card.Text>
                </a>
            
            </Card.Body>
        </Card>
    )
};

export default DevCard;
