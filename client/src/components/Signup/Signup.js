import React, { useState, useEffect} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import Api from "../../utils/Api"

const Signup = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault()
  Api.signup({ 
    firstName: firstName, 
    lastName: lastName,
    email: email,
    password: password,
    username: userName
  }).then(res => {
    console.log(res)
    const userLoginInfo = {
      username: userName,
      password,
    };
    Api.login(userLoginInfo).then(res => {
      if(res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", JSON.stringify(userLoginInfo));
        history.push("/forum")
      }
    })
  }) 
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="FirstName">First Name</Label>
            <Input type="FirstName" name="FirstName" id="FirstName" placeholder="First Name" onChange = { e => setFirstName (e.target.value)} value = {firstName}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="LastName">Last Name</Label>
            <Input type="LastName" name="LastName" id="LastName" placeholder="Last Name" onChange = { e => setLastName (e.target.value)} value = {lastName} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="mail" placeholder="Email" onChange = { e => setEmail (e.target.value)} value = {email}/>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password </Label>
        <Input type="password" name="password" id="password" placeholder="Password 6+ characters" onChange = { e => setPassword (e.target.value)} value = {password}/>
      </FormGroup>
      <Row form>
        <Col>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input type="text" name="userName" id="User Name" placeholder="Username 4+ characters" onChange = { e => setUserName (e.target.value)} value = {userName}/>
          </FormGroup>
        </Col>
      </Row>
      {/* //sign up page redirects to forum page  */}
      <Button onClick = {handleSubmit}>Sign up</Button> {}  
    {/* //Sign in button that redirects the  user to the login page if they hve already signed up*/}
      <Button onClick = {() => history.push("/login")}>Log in</Button>
    </Form>
  );
}

export default Signup;