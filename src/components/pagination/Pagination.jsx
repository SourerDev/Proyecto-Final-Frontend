import React from "react";
import { setPublicationPage } from "../../redux2.0/reducers/Publication";

export function Pagination({size, currentPage}) {
    

    //////////////////////////// FUNCIONES DEL BUSCADOR ///////////////////////////////// 
    
   /*  const disablePrev = () => {
        if (currentPage === 1) return true
        else return false
    }
    const disableNext = () => {
        if (currentPage === maximo) return true
        else return false
    }
    const nextPage = () => {
        if (currentPage === maximo) return
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage === 1) return
        setCurrentPage(currentPage - 1)
    } */

    return(
        <div>
            <h1>Te fuiste paginado</h1>
        </div>
        /* <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px" > 
         <button onClick={prevPage} disabled={disablePrev()} >  <li>
         <a href="#" className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        </li>
        </button>         
            {pageNumbers && pageNumbers.map((number,i) =>(
                <button key={i}  className="boton"  onClick={()=>paginado(number)}>  
                    <li>
                        {
                            currentPage === number ? <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-sky-600 border rounded-sm">{number}</a>
                             :<a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sky-200 hover:red-gray-700 dark:bg-red-800 dark:border-red-700 dark:text-red-400 dark:hover:bg-grared-700 dark:hover:text-white rounded-sm">{number}</a>
                        }
                    </li>
                </button> 
            ))} 
             <button onClick={nextPage} disabled={disableNext()} ><li>
             <a href="#" className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li></button>
        </ul>

    </nav> */
    )
}