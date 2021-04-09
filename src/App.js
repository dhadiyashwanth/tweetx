import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Feed from "./components/Feed/Feed";
// import Navigation from "./components/Navigation/Navigation";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import ProfileFollowers from "./components/ProfileFollowers/ProfileFollowers";
import ProfileFollowing from "./components/ProfileFollowing/ProfileFollowing";


function App() {
  
  return (
    <>

    <BrowserRouter>
    
    <Switch>    
    <Route path='/' exact component={Login} />    
    <Route path='/signup' exact component={Signup} />
    <Route path='/login' component={Login} />
    <Route path='/feed' component={Feed} />
    <Route path='/users' component={Users} />
    <Route path='/profile' exact component={Profile} />
    <Route path='/profile/post'  component={Profile} />
    <Route path='/profile/followers'  component={ProfileFollowers} />
    <Route path='/profile/following'  component={ProfileFollowing} />

    
    </Switch>
    </BrowserRouter>

    
  
  
          </>

  );
}

export default App;
