import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import Api from "../../utils/Api";
import decode from 'jwt-decode';
import '../ProfileCard/ProfileCard.css'
import Avatar from './Avatar';
import PhotoModal from '../PhotoModal/PhotoModal';




function ProfileCard() {

    // Api.bioGet(decode(localStorage.getItem("token")))
    // .then (burrito => console.log(burrito));

    const[userInfo, setUserInfo]=useState();
    const[userBio, setUserBio]=useState();
    // const username = JSON.parse(localStorage.getItem("username")).username;
    useEffect(() => {
        getUser();
    }, [userInfo]);

    const onChangeHandler = (event) => {

        console.log(event.target.value);
        var file = event.target.value;

        setUserBio(file);
    };

    // Update Bio
    function UpdateBio() {
        
        const data = new FormData();
        data.append("bio", userBio);

        const userId = decode(localStorage.getItem("token"));
        console.log(data, userId.id);
        Api.bio(data, userId.id)
        // .then(() => console.log("fettuchini chicken alfredo"))
        // (x => this.setState({ ...this.state, show: false}))
        .catch((err) => console.log(err))
    
    }

    const getUser = async () => {
        const { id } = decode(localStorage.getItem("token"));
        const { data } = await Api.name(id);
        setUserInfo(data);
    };
    if(!userInfo) return <h1>Loading...</h1>
    const { firstName, lastName, username, image } = userInfo;
    const fullName = (user) => {
        return `${user.firstName} ${user.lastName}`
    }
    return (
        <div className="Container">
            {/* User Photo */}
            <Row>
                <Col xs={12}>
                    <Avatar image={image} style={{"max-height":"250px", "max-width": "250px", "height":"100%", }}/>
                    <PhotoModal />
                </Col>
            </Row>
            {/* Username*/}
            <Row>
                <Col xs={12}>
                    <div className="Username">
                        {username.toUpperCase()}
                    </div> 
                </Col>
            </Row>
            {/* Full Name*/}
            <Row>
                <Col xs={12}>
                    <div className="FullName">
                        Hello, I'm {fullName(userInfo)}!
                    </div> 
                </Col>
            </Row>
            {/* User Bio*/}
            <Row>
                <Col xs={12}>
                    <div className="Bio">
                    <Card className="BioCard"> 
                        
                        <InputGroup className="mb-3 d-flex">
                            <FormControl className="bioForm"
            
                            placeholder={userInfo.bio}
                            // input={userInfo.bio}
                            aria-label="User Bio"
                            onChange={onChangeHandler}
                            />
                        </InputGroup>
                        <Button variant="outline-secondary" className="updateBtn" onClick={UpdateBio}>Update </Button>
                    </Card>
                        
                    </div> 
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    
                </Col>
            </Row>
        </div>
    )
}
export default ProfileCard