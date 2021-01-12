import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
// import ModelCard from './ModelCard'



function ModelList({categories}){
    console.log(categories)
    
    return(
        <div className='model-list'>
            {categories.map(category => (
                <Link to={`/category/${category.id}`} key={category.id}>
                    {/* <ModelCard key={categories.id} category={category}/>
                    <div>{category.name}---{category.count}Models</div> <br/> */}
                    <CategoryCard key={category.id} category={category}/>
                </Link>
                
            ))}
        </div>
    )

}

export default ModelList