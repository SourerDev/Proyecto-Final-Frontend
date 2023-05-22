import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import { ProyectCard } from '../../components/card/ProyectCard.jsx';
import { getallProperties, filterProperties, resetAlert } from '../../redux/actions/index.js';
import AdvancedFilters from '../../components/advanced-filters/AdvancedFilters.jsx';
import { findNameCity } from '../../utils/autocompleteUtils'
import ModalAF from '../../components/modal/ModalAdvancedFilters.jsx';
//import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';
import swal from 'sweetalert2'
import { noProperties } from "../../sweetAlerts/sweetAlerts"
//import state from 'sweetalert/typings/modules/state.js';

export function Home() {
    // const { properties, citiesA, filteredProperties, user} = useSelector(state => state);
    // const {favorites}  = useSelector(state => state.user)
    const { publications, leakedPublications } = useSelector(state => state.publication)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPage, setPropertiesPage] = useState(6);
    const [modalOn, setModalOn] = useState(false);

    const pagination = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }

    const clicked = () => {
        setModalOn(true)
    }

    /* const newProperties = filteredProperties?.length && typeof (filteredProperties) !== "string" ? filteredProperties : properties; */


    const lastIndex = currentPage * propertiesPage;
    const firstIndex = lastIndex - propertiesPage;
    //const currentProperties = newProperties?.slice(firstIndex, lastIndex);

  


    /* useEffect(() => {
        console.log(filteredProperties)
        dispatch(getallProperties());
    }, [favorites]) */
    
    typeof(leakedPublications) === "string" && (swal.fire(noProperties()).then(res=>{
        //dispatch(filterProperties(properties))
        dispatch(resetAlert())
    }))
    
    return (
        <div>

        {/* <div className="bg-gray-900 m-2 rounded overflow-hidden">
                 <LandingSearch clicked={clicked}/>
        </div> */}

        {modalOn && < ModalAF setModalOn={setModalOn}   />}

        {/* (<div class="flex justify-center h-10 ">
            <ul className= "">                  
                <Paginado
                propertiesPage={propertiesPage}
                properties={newProperties?.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginado={pagination}
                />  </ul>

        </div>) */}
        <br />
        {/* <div className='flex lg:flex-row flex-col '>

        <div className='px-2 mb-10 lg:w-1/4'>
        <AdvancedFilters/>
        </div>  
        lg:ite grid  lg:grid-cols-2 lg:my-0 
        */}

        {/* {typeof (filteredProperties) === "string" &&(swal.fire(noProperties()).then(res => console.log()))} */}
            <div className='flex sm:flex-row flex-wrap justify-center lg:shadow-2xl'>
                {publications?.length && publications.map((p, i)=> {
                    return( 
                        <div key={i} className=' my-2 px-4 lg:px-9 '>
                            <ProyectCard
                            mainData={{
                                idPublication: p.idPublication, 
                                modality: p.modality, 
                                price: p.price,
                            }}
                            details={{
                                address: p.Property.address, 
                                city: p.Property.idCity, 
                                photo: p.Property.photos[0], 
                                bedrooms: p.Property.bedrooms, 
                                bathrooms: p.Property.bathrooms, 
                                type: p.Property.type, 
                            }}
                            user={p.User}
                        /*     key={el.id}
                            id={el.id}
                            favorite={favorites?.includes(el.id)}
                            city={findNameCity(citiesA,el.idCity)}
                            modality ={el.modality}
                            address={el.address}
                            price={el.price}
                            images={el.images}
                            garage={el.garage}
                            idUser={user?.id_User ?  user?.id_User : false}
                            userProperty={el.User} */ 
                            />
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}