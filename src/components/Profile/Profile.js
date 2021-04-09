import React from "react";
import Navigation from "../Navigation/Navigation";
import Post from "../Post/Post";
import ProfileTop from "../ProfileTop/ProfileTop";
import "./Profile.css";
// import Post from "../Post/Post";

function Profile() {
  return (
    <>
      <Navigation />

      <div className="profile">
        <ProfileTop />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </>
  );
}

export default Profile;
