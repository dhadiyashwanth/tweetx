import React from "react";
import Navigation from "../Navigation/Navigation";
import Post from "../Post/Post";
import "./Feed.css";

function Feed() {
  return (
    <>
      <Navigation />

      <div className="feed">
        <button className="write_btn">Write</button>
        <div className="post">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default Feed;
