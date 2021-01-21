import React, { useEffect, useState } from 'react'
import {AppBar, Toolbar, IconButton, Container} from '@material-ui/core'
import NavbarLinks from './NavbarLinks'
import logo from './pics/nimbus.png'
import SearchBar from './SearchBar'
import MobileNavBar from './MobileNavbar'

import './Navbar.css'

function Navbar(){

  //Check and keep track of window size
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const DesktopNavBar = () => (
      <AppBar position="static" style={{marginBottom:'2rem'}}>
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

    return (
      <>
      {mobileView ? <MobileNavBar setState={setState} drawerOpen={drawerOpen} /> : DesktopNavBar()}
      </>
    )
}

export default Navbar