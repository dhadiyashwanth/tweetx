import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './Post.css'

function Post() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));    
    }, []);

    return (
        <div>
            <div className="Container">
            <div className="top_container">
            <div className="Info">
            <div className="image">
            <Avatar className='avatar' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            </div>

            <div className="name">
            <h4>Arjun Reddy</h4>
            </div>
            
            </div>
            <div className="time">
            <p>10 mins ago</p>
            </div>
            </div>
            <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur similique quis corrupti ea temporibus ducimus. Ea soluta qui distinctio eaque sunt aperiam. Quas exercitationem ullam veniam eius distinctio beatae.</p>
            </div>
            </div>
        </div>
    )
}

export default Post
