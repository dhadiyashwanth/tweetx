import React, {useState, useEffect } from 'react'
import db from '../../Firebase'
import Navigation from '../Navigation/Navigation'

import User from '../User/User'
import './Users.css'

function Users() {

    const [user, setUser] = useState([])


    useEffect(() => {
        db.collection('users').onSnapshot(snapshot =>(
            setUser(snapshot.docs.map(
                doc => doc.data()
            ))
        ))
    }, [])

  

    return (
        <>
        <Navigation />

        <div className='users'>
       { user.map(({ name, followers, }) => (

        <User
        name={name}
        followers={followers}

        />)
        )}
       
        </div>
        </>
    )
}

export default Users
