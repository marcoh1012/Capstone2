import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Container } from '@material-ui/core';
import { useEffect } from 'react';
import { get_liked, get_user } from './actions/user'
import ModelList from './ModelList'
import { useParams } from 'react-router-dom';


function Featured(){
    const dispatch = useDispatch()
    let params = useParams()
    let loaded = useSelector(st => st.users.user !== undefined && st.users.user_things !==undefined )
    let user = useSelector(st => st.users.user)
    let things = useSelector(st => st.users.user_things)

    useEffect(function(){
        dispatch(get_liked())
        dispatch(get_user(params.username))
    },[params.username, dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }

    
    return (
        <div>
            <Container style={{textAlign:'left', display:'flex', borderBottom:'black 2px solid', paddingBottom: '1rem'}}>
                <img src={user.thumbnail} alt='' style={{width: '150px', borderRadius: '10rem', marginRight:'2rem'}}></img>
                <div>
                    <h2>{user.name}</h2>
                    <p>Total Designs: {user.count_of_designs}</p>
                </div>
            </Container>
        <ModelList things={things}/>
        </div>
    )

}

export default Featured