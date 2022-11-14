import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'
import { getallProperties } from '../../redux/actions/index.js';
import AdvancedFilters from '../../components/advanced-filters/AdvancedFilters.jsx';

export default function Home(){

    const {properties, cities, filteredProperties} = useSelector(state => state);
    const paginado = (pageNumbers) =>{
        setCurrentPage(pageNumbers)
    }
    const newProperties = filteredProperties?.length ? filteredProperties : properties;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPage, setPropertiesPage] = useState(4);

    const lastIndex = currentPage * propertiesPage;
    const firstIndex = lastIndex - propertiesPage;
    const currentProperties = newProperties.slice(firstIndex,lastIndex);
    
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallProperties())
    }, [])

    return(
        <div>
            <div class="flex justify-center bg-red-200">
                <ul className='my-8'>                  
                    <Paginado
                    propertiesPage={propertiesPage}
                    properties={newProperties.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginado={paginado}
                    />  </ul>
                
            </div>
            <br />
        <div className='flex xl:flex-row flex-col '>
        
        <div >
        <AdvancedFilters/>
        </div>
        
            
            <div className='grid xl:grid-cols-2 flex sm:flex-col bg-gray-300'>

            {
                currentProperties?.length && currentProperties.map((el)=> {
                    return( <div className='  xl:m-6 '>
                        <Card
                        
                        key={el.id} id={el.id}
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