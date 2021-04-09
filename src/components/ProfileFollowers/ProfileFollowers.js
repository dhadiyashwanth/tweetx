import React, {useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import ProfileTop from '../ProfileTop/ProfileTop'
import db from '../../Firebase'

import User from '../User/User'
import './ProfileFollowers.css'

function ProfileFollowers() {

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
        <div className='followers_container'>
        <ProfileTop />
        { user.map(({ name, followers, }) => (

            <User
            name={name}
            followers={followers}
    
            />)
            )}
        </div>
        </div>
    )
}

export default ProfileFollowers
