import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../components/paginado/Paginado.jsx";
import { PropertyCard } from "../components/cards/PropertyCard.jsx";
import {
  getallProperties,
  filterProperties,
  resetAlert,
} from "../redux/actions/index.js";
import AdvancedFilters from "../components/advanced-filters/AdvancedFilters.jsx";
import { findNameCity } from "../utils/autocompleteUtils.js";
import ModalAF from "../components/modal/ModalAdvancedFilters.jsx";
//import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';
import swal from "sweetalert2";
import { noProperties } from "../sweetAlerts/sweetAlerts.js";
//import state from 'sweetalert/typings/modules/state.js';

export function Home() {
  // const { properties, citiesA, filteredProperties, user} = useSelector(state => state);
  // const {favorites}  = useSelector(state => state.user)
  const { publications, leakedPublications } = useSelector(
    (state) => state.publication
  );
  const {signIn} = useSelector(state => state.user)
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPage, setPropertiesPage] = useState(6);
  const [modalOn, setModalOn] = useState(false);

  const pagination = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  const clicked = () => {
    setModalOn(true);
  };


  const lastIndex = currentPage * propertiesPage;
  const firstIndex = lastIndex - propertiesPage;
  //const currentProperties = newProperties?.slice(firstIndex, lastIndex);

  /* useEffect(() => {
        console.log(filteredProperties)
        dispatch(getallProperties());
    }, [favorites]) */

  /* typeof leakedPublications === "string" &&
    swal.fire(noProperties()).then((res) => {
      //dispatch(filterProperties(properties))
      dispatch(resetAlert());
    });
 */
  return (
    <div>
      {/* <div className="bg-gray-900 m-2 rounded overflow-hidden">
                 <LandingSearch clicked={clicked}/>
        </div> */}

      {modalOn && <ModalAF setModalOn={setModalOn} />}

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
      <div className="flex sm:flex-row flex-wrap justify-center lg:shadow-2xl">
        {publications?.length &&
          publications.map((publication, i) => {
            //
            const { idPublication, modality, price, id} = publication;
            const mainData = {
              idPublication,
              modality,
              price,
            };
            const { address, idCity, photos, bedrooms, bathrooms, type } = publication.Property;
            const details = {
                address,
                city: idCity, /* Temporal hasta refactor de autocomplete & API cities */
                photo: photos[0],
                bedrooms,
                bathrooms,
                type
            };

            const user = {
                ...publication.User,
                avatar: publication.User.photo,
            }
            return (
              <div key={i} className=" my-2 px-4 lg:px-9 ">
                <PropertyCard
                  mainData={mainData}
                  details={details}
                  user={user}
                  signIn={signIn}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
