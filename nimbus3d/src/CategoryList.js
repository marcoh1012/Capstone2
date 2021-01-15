import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
// import ModelCard from './ModelCard'



function ModelList({categories}){
    
    return(
        <div className='model-list'>
            {categories.map(category => (
                <Link to={`/category/${category.slug}`} key={category.id}>
                    <CategoryCard key={category.id} category={category}/>
                </Link>
                
            ))}
        </div>
    )

}

export default ModelList