import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import '../images/SCP.png';
import {Navbar, Nav, Form, FormControl, Button, NavLink} from 'react-bootstrap';
import Api from "../../utils/Api"
import { useHistory, Redirect, useLocation} from 'react-router-dom';

const LogoCropped = require('../images/SCPCropped.png')

const NavBar = () => {
  //Setting is loggedin as false by default
  const [ isLoggedin, setIsloggedin] = useState(false);
  const history = useHistory();
  let location = useLocation();


  useEffect(() =>{
if (localStorage.getItem("token")) {
  setIsloggedin(true)
} else {
  setIsloggedin(false)
}
  }, 
  [location])

  //removing token then redirecting to logiin if they logout 
  const logout = () =>{
    localStorage.removeItem ("token")
    Api.logout().then (res =>{
history.push ("/login")
    })
  }
  
  return (


    <Navbar expand="lg">
      
      <Link to='/'><img src ={LogoCropped.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="outline-secondary"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Link
            to="/forum"
            className={window.location.pathname === "/forum" ? "nav-link active" : "nav-link"}>
            Forum
          </Link>
          <Link
            to="/our-story"
            className={window.location.pathname === "/our-story" ? "nav-link active" : "nav-link"}>
            Our Story
          </Link>
          <Link
            to="/user"
            className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}>
            Profile
          </Link>

          

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" id="SearchBar" />
        </Form>
        
{!isLoggedin ? (
        <Button className="LoginBtn" variant="outline-secondary"><Link to='/Register' className="RegisterBtn">Login / Sign Up</Link></Button> 
): ( //logout button shows up if they are logged in 
        <Button className="LoginBtn" variant="outline-secondary" onClick={logout}>Logout</Button>)}
        
      </Navbar.Collapse>
    </Navbar>
   );
};

export default NavBar;
