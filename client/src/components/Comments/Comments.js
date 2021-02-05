import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import './Comments.css';


const Comments = (props) => {
    const [user, setUser] = useState(props.commentUsername.username)

    return (
    <Card className="p-0 my-2">
        <Card.Body>
            <Card.Subtitle 
                className="mb-2 text-muted meta-data-date-time meta-data">
                <span className="meta-data-username">{user}</span> | {props.commentDate} 
            </Card.Subtitle>
            <Card.Text>
                {props.commentBody}
            </Card.Text>
        </Card.Body>
    </Card>
)};

export default Comments;