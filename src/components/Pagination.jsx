import React from "react";


export const Pagination = ({ perPage , totalData, paginate, currentPage , firstData, lastData} ) => {

    const pageNumber = []
 
    const style =  'bg-primary-100 text-secondary-300'

    for(let i = 1 ; i  <= Math.ceil(totalData / perPage) ; i++){
        pageNumber.push(i)
    }

    const prevPage = () => {
        if(currentPage !== 1){
            paginate(currentPage-1)
        }
    }

    const nextPage = () => {
        if(currentPage !== pageNumber.length){
            paginate(currentPage+1)
        }
    }

    // if()
    
    return(
        <nav className="flex flex-row justify-center items-center mr-4">
            <ul className="pagination flex flex-row justify-between items-center">
            <p className="text-[#1D252C] hover:bg-[#f7f9fa] py-[7px] px-[10px] rounded-lg cursor-pointer">{firstData} - {lastData} of {totalData}</p>
            <div className={` cursor-pointer hover:bg-[#f7f9fa] hover:text-black min-w-[2.5rem] justify-center ml-[8px] mr-[15px] py-2 flex flex-row items-center`}
             onClick={prevPage}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class={` text-[#1D252C] h-6 w-6 mr-2   icon`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
                <li>{currentPage}</li>
                <div className={`${currentPage === pageNumber.length ? "bg-[#f7f9fa] text-black cursor-context-menu " : " next  cursor-pointer  " } text-[#1D252C] hover:bg-[#f7f9fa] hover:text-primary-100 min-w-[2.5rem] justify-center ml-[15px] py-2 flex flex-row items-center`} onClick={nextPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" class={` h-6 w-6 mr-2 icon`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </ul>
        </nav>
    )
}