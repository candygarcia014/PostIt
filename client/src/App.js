import React from 'react';
import './App.css';
import NavBar from '../src/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Forum from './pages/Forum/Forum';
import Register from './pages/Register';
import User from './pages/User';
import OurStory from './pages/OurStory/OurStory';
import PostPage from "./pages/PostPage/PostPage";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import CommentPage from './components/MakeComment/MakeComment'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <ProtectedRoute path='/forum'>
          <Forum />
        </ProtectedRoute>
        <ProtectedRoute path='/user'>
          <User />
        </ProtectedRoute>
        <Route path='/post/:postId' component={PostPage} />
        <Route path='/our-story' component={OurStory} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={SignIn} />
        {/* <Route path='/post' component={PostPage} /> */}
      </Switch>
    </Router>
  );
}
export default App;