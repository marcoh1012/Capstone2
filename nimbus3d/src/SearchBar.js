import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import {InputBase} from '@material-ui/core'

import './SearchBar.css'

function SearchBar(){
    return(
            <div className='search'>
                <div className='searchIcon'>
                  <SearchIcon />
                </div>
                <InputBase
                  className='searchInput'
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            
    )
}

export default SearchBar;