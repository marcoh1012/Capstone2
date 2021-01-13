import React, { useState } from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import { get_things } from "./actions/thing";
import { get_liked } from "./actions/user"
import { useEffect } from 'react';
import ModelList from './ModelList'

import './Home.css'
import Pagination from './Pagination';


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    let things = useSelector(st => st.things.things)
    let total = useSelector(st => st.things.total_things)

    const [currentPage, setPage] = useState(1)
    const [days, setDays] = useState(7)


    useEffect(function(){
        dispatch(get_things());
        dispatch(get_liked());
    },[dispatch])
    
    const handleClick7 = () => {
        dispatch(get_things(7,1));
    }

    const handleClick30 = () => {
        dispatch(get_things(30,1));
    }

    const handleClick365 = () => {
        dispatch(get_things(365,1));
    }

    const handleClickRandom = () => {
        let days = Math.round(Math.random() * 730)
        console.log(days)
        dispatch(get_things(days,1))
    }
    const handleSetPage =(num) =>{
        alert(num)
        setPage(num)
        dispatch(get_things(days,num))
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

        <Pagination 
            currentPage = {currentPage}
            setPage = {handleSetPage}
            pages = {Math.ceil(total/30)}/>
        <Logout/>
        </>
    )

}

export default Home