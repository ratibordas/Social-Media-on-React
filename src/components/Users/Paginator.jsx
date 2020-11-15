import React, { useState } from 'react';


const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {


    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const left = (portionNumber - 1) * portionSize + 1;
    const right = portionNumber * portionSize;
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <nav className="users__pagination">
            {portionNumber > 1 &&
                <button className="users__pagination__up" onClick={() => { setPortionNumber(portionNumber - 1) }}>&#8593;</button>}
        <ul>
            
            {
                pages.filter(page => page >= left && page <= right).map(page => {
                    return <li className={`users__pagination__item ${currentPage === page ? "selected" : ""}`}
                        onClick={(e) => onPageChanged(page)}
                        key={page}>{page}</li>
                })
            }
           
        </ul>
        { portionCount > portionNumber &&
                <button className="users__pagination__down"  onClick={() => { setPortionNumber(portionNumber + 1) }}>&#8595;</button>}
        </nav>
    )


}

export default Pagination;