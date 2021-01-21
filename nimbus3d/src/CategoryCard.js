import { CardMedia, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_category } from './actions/category'

import './CategoryCard.css'
function  CategoryCard({category}) {
    const dispatch = useDispatch()
    const loaded = useSelector(st => st.categories[category.name] !== undefined)
    const category_data = useSelector(st => st.categories[category.name])

    useEffect(function(){
        dispatch(get_category(category.slug))
    }, [category.slug, dispatch])
        
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    

    return (
        <div className='category-card'>
            <div>
                <CardMedia className='model-card-img' component='img' image={category_data.preview_image} style={{height:'100%' , width:'100%',  borderRadius: '1rem'}}/>
                <div className='category-title'> <p>{category.name}</p><p>{category.count} Models</p></div>
            </div>
            
        </div>
    )

}

export default CategoryCard