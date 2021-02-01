import React from 'react';
import Card from 'react-bootstrap/Card';
import './StoryCard.css'

const StoryCard = () => {
    return (
  
  <Card className="story-card p-3 my-0">
  <Card.Body>
    <Card.Text style={{marginTop: "2rem"}}>
            Based upon research, we found that men want to be more knowledgeable about 
            self-care but lack the resources to do so. We created Self Care 
            Pirates as a forum for males that provides fast and reliable resources which 
            enables them to take action on their personal care.  
    </Card.Text>
  </Card.Body>
</Card>

    )};

export default StoryCard;
