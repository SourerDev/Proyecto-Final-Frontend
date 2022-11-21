import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'
import { getallProperties } from '../../redux/actions/index.js';
import AdvancedFilters from '../../components/advanced-filters/AdvancedFilters.jsx';
import  {findNameCity} from '../../utils/autocompleteUtils'
import CarouselHome from '../../components/carousel-home/carousel-home.jsx';

const images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-diseno-contemporaneo26-1637602658.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
    "https://images.unsplash.com/photo-1667802132853-7549c1ff0c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  
  const images2=[
    {image:images[0],id:25486},
    {image:images[1],id:25486},
    {image:images[2],id:25486},
    {image:images[1],id:25486},
    {image:images[4],id:25486}
  ]

export default function Home(){

    const {properties,citiesA, filteredProperties,favorites} = useSelector(state => state);
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
        let item = favorites?.join('&')
        if (item?.length > 0) {
            localStorage.setItem('favorite',`${item}`)
        }
        if(!localStorage.getItem('favorite')?.length) localStorage.setItem('favorite',``) 

    }, [favorites])

    return(
        <div>
           <CarouselHome  images={images2}/>
           
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
        
        <div className='px-2 lg:w-1/4'>
        <AdvancedFilters/>
        </div>
        
            
            <div className='lg:w-3/4 grid  my-3 bg-gray-300  lg:grid-cols-2 lg:my-0  sm:flex-col justify-center lg:bg-gray-300 '>
                                        
            {
                currentProperties?.length && currentProperties.map((el,i)=> {
                    return( 
                    
                    <div key={i} className=' my-2 px-4 lg:px-9 '>

                        
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