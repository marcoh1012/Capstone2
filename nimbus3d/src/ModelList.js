import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ModelCard from './ModelCard'



function ModelList({things}){
    let liked = useSelector(st => st.users.liked)
    console.log(liked)
    console.log(things)
    return(
        <div className='model-list'>
            {things.map(thing => (
                <Link key={thing.id} to={`/model/${thing.id}`}>
                    <ModelCard key={thing.id} thing={thing} liked={liked.includes(thing.id)}/>
                </Link>
                
            ))}
        </div>
    )

}

export default ModelList