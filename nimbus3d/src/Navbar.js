import React from 'react'
import {AppBar, Toolbar, IconButton, Container} from '@material-ui/core'
import NavbarLinks from './NavbarLinks'
import logo from './pics/nimbus.png'
import SearchBar from './SearchBar'

import './Navbar.css'

function Navbar(){
    return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth={false} className='navbarContainer'>
          <IconButton edge="start" color="inherit" aria-label="home" href='/'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <h1>Nimbus 3D</h1>
          </IconButton>
          <SearchBar/>
          <NavbarLinks/>
        </Container>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar