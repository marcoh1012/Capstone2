import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_liked } from './actions/user';
import ModelCard from './ModelCard'



function ModelList({things}){
    const dispatch = useDispatch()

    useEffect(function(){
        dispatch(get_liked);
    }, [dispatch])

    return(
        <div className='model-list'>
            {things.map(thing => (
                // <Link key={thing.id} to={`/model/${thing.id}`}>
                    <ModelCard key={thing.id} thing={thing}/>
                // </Link>
                
            ))}
        </div>
    )

}

export default ModelList