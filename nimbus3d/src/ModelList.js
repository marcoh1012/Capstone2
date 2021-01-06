import { ListItemSecondaryAction } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_liked } from './actions/user';
import ModelCard from './ModelCard'



function ModelList({things}){
    const dispatch = useDispatch()
    let liked = useSelector(st => st.users.liked)

    useEffect(function(){
        dispatch(get_liked);
    }, [dispatch])

    // check if thing is liked by the user.
    function isLiked(id){

        if(liked.length === 0) return false;

        const item = liked.filter(item => item.id === id)

        if(item.length === 0)return false;
        return true
    }

    return(
        <div className='model-list'>
            {things.map(thing => (
                // <Link key={thing.id} to={`/model/${thing.id}`}>
                    <ModelCard key={thing.id} thing={thing} liked={isLiked(thing.id)}/>
                // </Link>
                
            ))}
        </div>
    )

}

export default ModelList