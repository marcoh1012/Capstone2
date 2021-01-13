import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import { get_things } from "./actions/thing";
import { get_liked } from "./actions/user"
import { useEffect } from 'react';
import ModelList from './ModelList'

import './Home.css'


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    let things = useSelector(st => st.things.things)
    let total = useSelector(st => st.things.total_things)


    useEffect(function(){
        dispatch(get_things());
        dispatch(get_liked());
    },[dispatch])
    
    const handleClick7 = () => {
        dispatch(get_things(7));
    }

    const handleClick30 = () => {
        dispatch(get_things(30));
    }

    const handleClick365 = () => {
        dispatch(get_things(365));
    }

    const handleClickRandom = () => {
        let days = Math.round(Math.random() * 730)
        console.log(days)
        dispatch(get_things(days))
    }
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <>
        <h2>Welcome!!</h2>
        <div className='home-buttons'>
            <Button onClick={handleClick7}>Popular Last 7 Days</Button>
            <Button onClick={handleClick30}>Popular Last 30 Days</Button>
            <Button onClick={handleClick365}> Popular This Year</Button>
            <Button onClick={handleClickRandom}>Random</Button>
        </div>
        <ModelList things={things}/>
        <Logout/>
        </>
    )

}

export default Home