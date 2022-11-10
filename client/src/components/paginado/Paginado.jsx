import React from "react";

export default function Paginado({propertiesPage, properties, setCurrentPage, currentPage, paginado,}){
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(properties/propertiesPage); i++){
        pageNumbers.push(i+1)
    }
    const porPagina = 5
    let maximo = Math.round( properties.length / porPagina)
    
    //////////////////////////// FUNCIONES DEL BUSCADOR ///////////////////////////////// 
    
    const disablePrev = () => {
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
    }

    return(
        <nav  key={Paginado}className="paginado">
        <ul > 
                  <button onClick={prevPage} disabled={disablePrev()} >❮</button>         
            {pageNumbers && pageNumbers.map(number =>(
           <button  className="boton"  onClick={()=>paginado(number)}> {number}   </button> 
            ))} 
             <button onClick={nextPage} disabled={disableNext()} >❯</button>
        </ul>

    </nav>
    )
}