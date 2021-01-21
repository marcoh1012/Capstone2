import { React } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import NavbarLinks from './NavbarLinks'
import logo from './pics/nimbus.png'
import SearchBar from './SearchBar'

import "./MobileNavbar.css";

function  MobileNavBar({setState, drawerOpen}) {

    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));



    return (
        <AppBar position="static" style={{marginBottom:'2rem'}}>
        <Toolbar className="navbarContainer">
            <IconButton edge="start" color="inherit" aria-label="home" href='/'>
                <img src={logo} alt='logo' className='logo-img'></img>
                <h1>Nimbus 3D</h1>
              </IconButton>
              <IconButton
                onClick={handleDrawerOpen}
              {...{
                float: "right'",
                edge: "right",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
              }}
            >
              <MenuIcon className='mobile-menu-icon'/>
            </IconButton>

            <Drawer
            className="navbar-drawer"
            {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
            }}
            >
           
            <div className='mobile-links'><NavbarLinks/></div>
            <div className='mobile-search'><SearchBar /> </div>
            </Drawer>
        </Toolbar>
        </AppBar>
    )
}

export default MobileNavBar