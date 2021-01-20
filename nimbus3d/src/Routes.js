import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Featured from "./Featured";
import Liked from "./Liked"
import ModelPage from "./ModelPage"
import CategoryModelList from "./CategoryModelList"
import { useSelector } from "react-redux";
import Login  from "./Login";
import SearchPage from './SearchPage';
import AccountPage from './AccountPage';
import UserPage from './UserPage'


function Routes(){
    const loggedIn = useSelector(st => st.auth['access_token'] !== undefined);
    return(
    <Switch>
        <Route exact path='/login'>
          {loggedIn ? <Redirect to='/'/> : <Login/>}
        </Route>
        <Route exact path='/'> 
          {loggedIn ? <Home loggedIn={loggedIn}/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path='/categories'>
          {loggedIn ? <Categories/> : <Redirect to='/login'/>}
        </Route>
        <Route path = '/category/:id'>
        {loggedIn ? <CategoryModelList/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path='/featured'>
          {loggedIn ? <Featured/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path='/likes'>
          {loggedIn ? <Liked/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path='/account'>
         {loggedIn ? <AccountPage/> : <Redirect to='/login'/>}
        </Route>
        <Route path='/model/:id'>
          {loggedIn ? <ModelPage/> : <Redirect to='/login'/>}
        </Route>
        <Route path='/users/:username'>
            {loggedIn ? <UserPage/> : <Redirect to='/login'/>}
        </Route>
        <Route path='/search/:term'>
          {loggedIn ? <SearchPage/> : <Redirect to='/login'/>}
        </Route>
        <Redirect to='/'/>
    </Switch>
    )
}

export default Routes