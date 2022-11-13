
import {useState} from 'react';
import {useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'
import LandingSearch from '../../components/landingSearch/LandingSearch.jsx'


export default function Home(){

    const {properties, cities} = useSelector(state => state);
    const paginado = (pageNumbers) =>{
        setCurrentPage(pageNumbers)
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPage, setPropertiesPage] = useState(5);

    const indexOfLastProperties = currentPage * propertiesPage;
    const indexOfFirstProperties = indexOfLastProperties - propertiesPage;
    const currentProperties = properties.slice(indexOfFirstProperties,indexOfLastProperties)
    /* console.log(currentProperties) */
    return(
        <>
        <LandingSearch/>
        <div>
            <ul>                  
                <Paginado
                propertiesPage={propertiesPage}
                properties={properties.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginado={paginado}
                />  
            </ul>
            
            {
                currentProperties?.length && currentProperties.map((el)=> {
                    return(
                        <Card
                        address={el.address}
                        price={el.price}
                        image={el.image}
                        garage={el.garage}
                        
                        />
                    )
                })
            }
        </div>
        </>
    )
}