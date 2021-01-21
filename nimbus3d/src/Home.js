import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import { get_things } from "./actions/thing";
import { get_liked, get_user_info } from "./actions/user"
import { set_days, set_page} from './actions/page'
import { useEffect } from 'react';
import ModelList from './ModelList'

import './Home.css'
import Pagination from './Pagination';


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    let things = useSelector(st => st.things.things)
    let total = useSelector(st => st.things.total_things)
    let currentPage = useSelector( st => st.page.current_page)
    let days = useSelector(st => st.page.days)
    let user_info = useSelector(st => st.users.info)

    if(user_info === undefined){
        dispatch(get_user_info())
    }

    useEffect(function(){
        dispatch(get_things(days,currentPage));
        dispatch(get_liked());
    },[days, currentPage, dispatch])

    
    const handleClick7 = () => {
        dispatch(set_days(7));
        dispatch(set_page(1));
        dispatch(get_things(7,1));
    }

    const handleClick30 = () => {
        dispatch(set_days(30));
        dispatch(set_page(1));
        dispatch(get_things(30,1));
    }

    const handleClick365 = () => {
        dispatch(set_days(365));
        dispatch(set_page(1));
        dispatch(get_things(365,1));
    }

    const handleClickRandom = () => {
        let rdm_days = Math.round(Math.random() * 730)
        dispatch(set_days(rdm_days));
        dispatch(set_page(1));
        dispatch(get_things(rdm_days,1))
    }
    const handleSetPage =(num) =>{
        dispatch(set_page(num))
        dispatch(get_things(days,num))
    }

    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <div className='home'>
        <h2>Welcome!!</h2>
        <div className='home-buttons'>
            <Button onClick={handleClick7}>Popular Last 7 Days</Button>
            <Button onClick={handleClick30}>Popular Last 30 Days</Button>
            <Button onClick={handleClick365}> Popular This Year</Button>
            <Button onClick={handleClickRandom}>Random</Button>
        </div>
        <ModelList things={things}/>

        <Pagination 
            currentPage = {currentPage}
            setPage = {handleSetPage}
            pages = {Math.ceil(total/30)}/>
        </div>
    )

}

export default Home