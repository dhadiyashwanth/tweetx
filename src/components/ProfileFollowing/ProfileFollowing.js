import React, {useState, useEffect} from 'react'
import Navigation from '../Navigation/Navigation';
import './ProfileFollowing.css'
import ProfileTop from '../ProfileTop/ProfileTop';
import db from '../../Firebase'
import Following from './Following';

function ProfileFollowing() {

    const [user, setUser] = useState([])


    useEffect(() => {
        db.collection('users').onSnapshot(snapshot =>(
            setUser(snapshot.docs.map(
                doc => doc.data()
            ))
        ))
    }, [])

    return (
        <div >
        <Navigation />
        <div className='following_container'>
        <ProfileTop />
        { user.map(({ name, followers, }) => (

            <Following
            name={name}
            followers={followers}
    
            />)
            )}        
        </div>
        </div>
    )
}

export default ProfileFollowing;
