import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Button from 'react-bootstrap/Button';
import decode from 'jwt-decode';
import { Row, Col } from 'react-bootstrap';
import './MakePost.css';
import Api from "../../utils/Api";


const MakePost = ({ username }) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    //update tittle in posts 
    const updateTitle = e =>{
        e.preventDefault()
        setTitle(e.target.value) 
    }
    //update text:body in posts
    const updateText = e =>{
        e.preventDefault()
        setText(e.target.value) 
    }
    //submit onclick function on "submmit buotton on post card"
    const submit = e =>{
        e.preventDefault();
        const data = {
            body:text, title, username, 
        }
        const { id } = decode(localStorage.getItem("token"));
         Api.createPosts(data, id);
         setTitle("");
         setText("");
    }

    return (
    <Card className="p-0 my-2">
    <Card.Body>

    <Form>        
        {/* post title  */}
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Create a Post!</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange={updateTitle}/>
            </Form.Group>
        {/* post body/text */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Text" value={text} onChange={updateText}/>
            </Form.Group>
        
        <Row>
            <Col xs={4}>
                <DropdownMultiselect
                    options={["Skin", "Hair", "Body", "Mind", "Style", "Nails"]}
                    name="tags"
                    placeholder="Tags (select up to 3)"
                />
            </Col>
            <Col xs={4}>
                <Form.Group>
                    <Form.File   
                    id="exampleFormControlFile1"
                    />
                </Form.Group>
            </Col>
{/* submit button to create a new post */}
            <Col xs={4}>
                <Button 
                    variant="primary" 
                    type="submit"
                    className="post-button"
                    onClick={submit}
                    >
                    Post
                </Button>
            </Col>
        </Row>
        
        </Form>
       

    </Card.Body>
    </Card>
)};

export default MakePost;
