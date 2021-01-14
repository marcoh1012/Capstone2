import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search'
import {InputBase} from '@material-ui/core'

import './SearchBar.css'
import { useHistory } from 'react-router-dom';

function SearchBar(){
  const history = useHistory();


  const [term, setTerm] = useState('');

  const handleChange  = (e) => {

    setTerm(e.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    history.push(`/search/${term}`)
  } 

    return(
            <form className='search' onSubmit={handleSubmit}>
                <div className='searchIcon'>
                  <SearchIcon />
                </div>
                <InputBase
                  className='searchInput'
                  placeholder="Search…"
                  id='term'
                  value={term}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
                />
            </form>
            
    )
}

export default SearchBar;