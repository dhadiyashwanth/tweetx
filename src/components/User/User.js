import React, { useState, useEffect } from 'react';
import {Avatar} from "@material-ui/core";
import './User.css';


function User({ name, followers, }) {

    const [seed, setSeed] = useState("");
    const [following, setFollowing] = useState(false)
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));    
    }, []);

   
    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color: color,
            backgroundColor: color,
            margin: "0% 10%",
            width: "500px",
            
          }}
        />
      );

    return (
        <>
        <div className='container'>
        <div className="left_comp">

        <div className="pic">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        </div>

        <div className="info">
        <h4>{name}</h4>
        <p>followers: {followers}</p>
        </div>
        
        </div>
        <div className="follow">
      
       {following ? <button className='following_btn' onClick = {(e) => (setFollowing(false))}>following</button>:
    <button className='follow_btn' onClick = {(e) => (setFollowing(true))}>Follow</button>}
        </div>
        
        </div>

        <ColoredLine color="lightgray" />
        </>
    )
}

export default User
