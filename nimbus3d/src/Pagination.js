import React from 'react'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Pagination.css'

function Pagination({setPage, currentPage, pages}){

    if(pages===1 || pages === 0) return null;


    let range = []
    if (pages > 5){
        if(currentPage < pages - 5){
            for (let i = currentPage; i < currentPage + 5; ++i) {
                range.push(i);
              }
        }
        else{
            for (let i = pages - 4; i < pages + 4; ++i) {
                range.push(i);
              }
        }
    }
    else{
        for(let i = 1; i < pages; i++){
            range.push(i)
        }
    }

    const clickLastPage = ev => {
        ev.preventDefault();
        setPage(pages);
        window.scrollTo(0, 0)
      };

    const clickFirstPage = ev => {
        ev.preventDefault();
        setPage(1)
        window.scrollTo(0, 0)
    }

    const clickPrevPage = ev => {
        ev.preventDefault();
        setPage(currentPage - 1)
        window.scrollTo(0, 0)
    }
    const clickNextPage = ev => {
        ev.preventDefault();
        setPage(currentPage + 1)
        window.scrollTo(0, 0)
    }


    return (<div className='pages'>
        <ul className="pagination">
            {currentPage === 1 ? " " : ( 
                <>
                <li className='page' ><FirstPageIcon onClick={clickFirstPage}/></li>
                <li className='page'><ArrowBackIosIcon onClick={clickPrevPage}/></li>
                </>
            )}
            {range.map( num => {
                const clickPage = ev => {
                    ev.preventDefault();
                    setPage(num);
                    window.scrollTo(0, 0)
                  };
                return(<li key={num}
                className= { num===currentPage ? 'page pg-active' : 'page' }
                onClick={clickPage}
                >{num}</li>
            )}
            )}
            <div>....</div>
            <li className= { pages===currentPage ? 'page pg-active' : 'page' } onClick={clickLastPage}>{pages}</li>
            {currentPage === pages ? " " : ( 
                <>
                <li className='page'><ArrowForwardIosIcon onClick={clickNextPage}/></li>
                </>
            )}
        </ul>
    </div>)
}

export default Pagination