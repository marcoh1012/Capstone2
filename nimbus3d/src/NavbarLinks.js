import React from 'react';
import {List, ListItemText, ListItem} from '@material-ui/core'

const navLinks =[
    {title:'Home', path:'/'},
    {title:'Categories', path:'/categories'},
    {title:'Featured', path:'/featured'},
    {title:'Likes', path:'/likes'},
    {title:'Account', path:'/account'}
]

function NavbarLinks(){
    return (
        <List component="nav" aria-labelledby="main navigation" className='navLinks'>
            {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className='link'>
                    <ListItem button>
                        <ListItemText primary={title} />
                    </ListItem>
                </a>
            ))}
        </List>
    )
}

export default NavbarLinks