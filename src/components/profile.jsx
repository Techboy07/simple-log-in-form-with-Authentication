import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import JSONPretty from 'react-json-pretty'

export const Profile = () => {
    console.log('fuck life')
    const { user, isAuthenticated } = useAuth0()
    return (

        isAuthenticated &&
        <div>
            <img src={user.picture} alt="" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>


            <JSONPretty data={user} />
            {/* {JSON.stringify(user)} */}
        </div>
    )

}