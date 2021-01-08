import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import { like_model, unlike_model } from './actions/model';


//Like Button that keeps track of likes for models and displays appropriate icon.
function LikeButton({thing}){
    const dispatch = useDispatch()
    let isLiked = useSelector(st => st.users.liked)
    let liked = false

    const handleFavorite = () => {
        if(liked) dispatch(unlike_model(thing))
        else dispatch(like_model(thing))
    }
    
    if(isLiked.length === 0) return (<Button className='favorite-button' onClick={handleFavorite}><FavoriteBorderIcon/></Button>);

    const items = isLiked.filter(item => item.id === thing.id)
    console.log('items: ', items)

    if(items.length === 0)return (<Button className='favorite-button' onClick={handleFavorite}><FavoriteBorderIcon/></Button>);
    
    liked = true
    return (<Button className='favorite-button' onClick={handleFavorite}><FavoriteIcon style={{color:'red'}}/></Button>)
    
}

export default LikeButton