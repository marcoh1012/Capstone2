import { Card, CardMedia, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_images } from '../actions/model'
import Carousel from 'react-material-ui-carousel'
import CarouselSlide from 'react-material-ui-carousel'

function Images({id}){
    const dispatch = useDispatch()

    let loaded = useSelector(st => st.models.images !== undefined)
    const images = useSelector(st => st.models.images)
    
    useEffect(function(){
        dispatch(get_images(id))
    },[id, dispatch])

    if(!loaded) return <CircularProgress/>

    return(
        <div>
        <Carousel navButtonsAlwaysVisible='true'> 
            {images.map( image => (
           <CarouselSlide key={image.id} style={{marginRight:'1rem'}}>
           <Card style={{display:'flex', justifyContent:'center', paddingBottom:'1rem'}}>
               <CardMedia
                   image={image.sizes[13].url}
                   title={image.name}
                   style={{
                       height:'100%',
                       width: "75%",
                       paddingTop: '25%',
                       paddingBottom:'25%',
                       backgroundSize: 'contain'
                   }}
               />
            </Card>
            </CarouselSlide>
            ))}
    </Carousel>
    </div>)
}

export default Images