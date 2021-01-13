import React from 'react'

import './Pagination.css'

function Pagination({setPage, currentPage, pages}){

    if(pages===1) return null;

    let range = []

    if(currentPage < pages - 5){
        for (let i = currentPage; i < currentPage + 5; ++i) {
            range.push(i);
          }
    }
    else{
        for (let i = pages - 4; i < pages ; ++i) {
            range.push(i);
          }
    }
    console.log(range)

    const clickLastPage = ev => {
        ev.preventDefault();
        setPage(pages);
      };

    return (<div className='pages'>
        <ul className="pagination">
            {range.map( num => {
                const clickPage = ev => {
                    ev.preventDefault();
                    setPage(num);
                  };
                return(<li 
                className= { num===currentPage ? 'page pg-active' : 'page' }
                onClick={clickPage}
                >{num}</li>
            )}
            )}
            <div>....</div>
            <li className= { pages===currentPage ? 'page pg-active' : 'page' } onClick={clickLastPage}>{pages}</li>
        </ul>
    </div>)
}

export default Pagination