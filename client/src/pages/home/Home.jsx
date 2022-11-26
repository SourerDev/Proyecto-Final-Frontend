import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'
import { getallProperties } from '../../redux/actions/index.js';
import AdvancedFilters from '../../components/advanced-filters/AdvancedFilters.jsx';
import { findNameCity } from '../../utils/autocompleteUtils'
import ModalAF from '../../components/modal/ModalAdvancedFilters.jsx';
import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';


export default function Home() {

    const { properties, citiesA, filteredProperties, favorites, user} = useSelector(state => state);
    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }


    const newProperties = filteredProperties?.length && typeof (filteredProperties) !== "string" ? filteredProperties : properties;

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPage, setPropertiesPage] = useState(4);

    const lastIndex = currentPage * propertiesPage;
    const firstIndex = lastIndex - propertiesPage;
    const currentProperties = newProperties.slice(firstIndex, lastIndex);

    const [modalOn, setModalOn] = useState(false);
  
  const clicked = () => {
    setModalOn(true)
  }




    const dispatch = useDispatch()
    useEffect(() => {
        console.log(filteredProperties)
        dispatch(getallProperties());
        return ()=>{
            
        }
    }, [favorites])

    return (
        <div className=''>

        <div className="bg-gray-900 m-2 rounded overflow-hidden">
                 <LandingSearch clicked={clicked}/>
        </div>
           
  
      
  
  
        {modalOn && < ModalAF setModalOn={setModalOn}   />}
  
     

           {typeof (filteredProperties) === "string" ?'' :(<div class="flex justify-center h-10 ">
                <ul className= "">                  
                    <Paginado
                    propertiesPage={propertiesPage}
                    properties={newProperties.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginado={paginado}
                    />  </ul>

            </div>)}
             <br />
        {/* <div className='flex lg:flex-row flex-col '>

        <div className='px-2 mb-10 lg:w-1/4'>
        <AdvancedFilters/>
        </div>  
        lg:ite grid  lg:grid-cols-2 lg:my-0 
        */}

        {typeof (filteredProperties) === "string"?(<><div className='h-[90vh] flex justify-center '>
                    <h4 className="p-2 text-lg">{filteredProperties + ""}</h4>
                </div></>):<div className='flex sm:flex-row flex-wrap justify-center lg:shadow-2xl'>
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
                    existUser={user?.email ? true : false}
                    />
                    </div>
                )
            })
        }
        </div>}

        </div>







    )
}