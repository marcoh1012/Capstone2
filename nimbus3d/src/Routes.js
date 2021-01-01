import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Featured from "./Featured";
import { useSelector } from "react-redux";
import Login  from "./Login";


function Routes(){
    const loggedIn = useSelector(st => st.users['access_token'] !== undefined);
    return(
    <Switch>
        <Route exact path='/'> 
          {loggedIn ? <Home/> : <Login/>}
        </Route>
        <Route exact path='/categories'>
          {loggedIn ? <Categories/> : <Login/>}
        </Route>
        <Route exact path='/featured'>
          {loggedIn ? <Featured/> : <Login/>}
        </Route>
        <Route exact path='/likes'>

        </Route>
        <Route exact path='/account'>
            
        </Route>
        <Route path='/model/:id'>

        </Route>
        <Redirect to='/'/>
    </Switch>
    )
}

export default Routes