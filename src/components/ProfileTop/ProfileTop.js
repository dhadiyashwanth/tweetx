import { Avatar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileTop.css";

function ProfileTop() {
  const Line = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        margin: "0% 10%",
        width: "80%",
        height: 1,
        boxShadow: "0px 1px 7px 1px rgb(224, 224, 224)",
      }}
    />
  );

  return (
    <div className="_container">
      <div className="profile_nav">
        <div className="dp">
          <Avatar className="profile_pic" />
        </div>
        <div className="user_profile">
          <div className="username">
            <h2>Arjun Reddy</h2>
          </div>
          <div className="user_info">
            <div className="_posts">
              <p>Posts : 48</p>
            </div>
            <div className="_followers">
              <p>Followers : 239</p>
            </div>
            <div className="_following">
              <p>Following : 197</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_navbar">
        <Line color="rgb(224, 224, 224)" />
        <div className="nav_profile">
        <NavLink className='profile_navItems' exact activeClassName='active_profileNav' to='/profile/post' >Post</NavLink>
        <NavLink className='profile_navItems' exact activeClassName='active_profileNav' to='/profile/followers'>Followers</NavLink>
        <NavLink className='profile_navItems' exact activeClassName='active_profileNav' to='/profile/following'>Following</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileTop;
