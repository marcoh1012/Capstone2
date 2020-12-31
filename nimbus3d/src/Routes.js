import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
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

        </Route>
        <Route exact path='/featured'>

        </Route>
        <Route exact path='/likes'>

        </Route>
        <Route exact path='/account'>
            
        </Route>
        <Redirect to='/'/>
    </Switch>
    )
}

export default Routes