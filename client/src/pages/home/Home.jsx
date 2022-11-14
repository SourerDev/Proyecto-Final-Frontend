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
    const [propertiesPage, setPropertiesPage] = useState(5);

    const lastIndex = currentPage * propertiesPage;
    const firstIndex = lastIndex - propertiesPage;
    const currentProperties = newProperties.slice(firstIndex,lastIndex);
    
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallProperties())
    }, [])

    return(
        <>
        <div className='flex flex-row'>
            {/* <LandingSearch/> */}
        <AdvancedFilters
        />
        <div>
            <div>
                <ul>                  
                    <Paginado
                    propertiesPage={propertiesPage}
                    properties={newProperties.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginado={paginado}
                    />  
                </ul>
            </div>
            <div className='flex flex-wrap'>

            {
                currentProperties?.length && currentProperties.map((el)=> {
                    return(
                        <Card
                        key={el.id} id={el.id}
                        address={el.address}
                        price={el.price}
                        images={el.images}
                        garage={el.garage}
                        />
                    )
                })
            }
            </div>
            
        </div>
        </div>
        </>
    )
}