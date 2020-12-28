import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';


function Home(){
    const loggedIn = useSelector(st => st.users['access_token'] !== undefined);
    

    console.log(loggedIn)
    if(!loggedIn){
        return(
            <>
            <Login/>
            </>
        )
    }
    return (
       <>
        <h3>Logged In</h3>
        <Logout/>
        </>
    )

}

export default Home