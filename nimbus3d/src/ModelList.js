import React from 'react';
import { Link } from 'react-router-dom';
import ModelCard from './ModelCard'



function ModelList({things}){
    
    return(
        <div className='model-list'>
            {things.map(thing => (
                <Link to={`/model/${thing.id}`}>
                    <ModelCard key={thing.id} thing={thing}/>
                </Link>
                
            ))}
        </div>
    )

}

export default ModelList