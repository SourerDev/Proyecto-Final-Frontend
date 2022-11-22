import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'
import { getallProperties } from '../../redux/actions/index.js';
import AdvancedFilters from '../../components/advanced-filters/AdvancedFilters.jsx';
import  {findNameCity} from '../../utils/autocompleteUtils'

export default function Home(){

    const {properties,citiesA, filteredProperties,favorites} = useSelector(state => state);
    const paginado = (pageNumbers) =>{
        setCurrentPage(pageNumbers)
    }
    

    const newProperties = filteredProperties?.length && typeof(filteredProperties) !== "string" ? filteredProperties : properties;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPage, setPropertiesPage] = useState(4);

    const lastIndex = currentPage * propertiesPage;
    const firstIndex = lastIndex - propertiesPage;
    const currentProperties = newProperties.slice(firstIndex,lastIndex);
    
    
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(filteredProperties)
        dispatch(getallProperties())
        let item = favorites?.join('&')
        if (item?.length > 0) {
            localStorage.setItem('favorite',`${item}`)
        }
        if(!localStorage.getItem('favorite')?.length) localStorage.setItem('favorite',``) 

    }, [favorites])

    if(typeof(filteredProperties) === "string") {
        return ( 
            <div className='flex lg:flex-row flex-col'>
                <div className='px-2 lg:w-1/4'>
                <AdvancedFilters/>
                </div>

                <div className='lg:w-3/4 flex justify-center '>
                    <h4 className="p-2 text-lg">{filteredProperties}</h4>
                </div>
            </div>
        )
    }
    return(
        <div>
            
            <div class="flex justify-center  bg-sky-200 ">
                <ul className='my-8 '>                  
                    <Paginado
                    propertiesPage={propertiesPage}
                    properties={newProperties.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginado={paginado}
                    />  </ul>
                
            </div>
            <br />
        <div className='flex lg:flex-row flex-col '>
        
        <div className='px-2 mb-10 lg:w-1/4'>
        <AdvancedFilters/>
        </div>
        
            
            <div className='lg:w-3/4 grid  my-3 bg-gray-300  lg:grid-cols-2 lg:my-0  sm:flex-col justify-center lg:bg-gray-300 '>
            {
                currentProperties?.length && currentProperties.map((el,i)=> {
                    return( <div key={i} className=' my-2 px-4 lg:px-9 '>
                        <Card
                        key={el.id}
                        id={el.id}
                        favorite={favorites.includes(el.id)}
                        city={findNameCity(citiesA,el.idCity)}
                        modality ={el.modality}
                        address={el.address}
                        price={el.price}
                        images={el.images}
                        garage={el.garage}
                        />
                        </div>
                    )
                })
            }
            </div>
            
        </div>
        </div>
        
        
        
        
        
       
    )
}