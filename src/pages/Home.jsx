import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../components/pagination/Pagination.jsx'
import { PropertyCard } from '../components/cards/PropertyCard.jsx'
import { arrayPaginator } from '../utils/arrayPaginator.js'
import {
  getallProperties,
  filterProperties,
  resetAlert,
} from '../redux/actions/index.js'
import AdvancedFilters from '../components/advanced-filters/AdvancedFilters.jsx'
import { findNameCity } from '../utils/autocompleteUtils.js'
import ModalAF from '../components/modal/ModalAdvancedFilters.jsx'
//import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';
import swal from 'sweetalert2'
import { noProperties } from '../sweetAlerts/sweetAlerts.js'
//import state from 'sweetalert/typings/modules/state.js';

export function Home() {
  // const {favorites}  = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { publications, page } = useSelector((state) => state.publication)
  const { signIn } = useSelector((state) => state.user)

  const CARDS_PER_PAGE = 4
  const { newArr, nButtons } = arrayPaginator(
    publications,
    CARDS_PER_PAGE,
    page
  )
  const _publications = newArr

  const [modalOn, setModalOn] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  /* typeof leakedPublications === "string" &&
    swal.fire(noProperties()).then((res) => {
      //dispatch(filterProperties(properties))
      dispatch(resetAlert());
    });
 */
  return (
    <div>
      {/* <div className="bg-gray-900 m-2 rounded overflow-hidden">
        <LandingSearch clicked={clicked} />
      </div> */}

      {modalOn && <ModalAF setModalOn={setModalOn} />}
      <br />
      {/* <div className='flex lg:flex-row flex-col '>

        <div className='px-2 mb-10 lg:w-1/4'>
        <AdvancedFilters/>
        </div>
        lg:ite grid  lg:grid-cols-2 lg:my-0
        */}

      {/* {typeof (filteredProperties) === "string" &&(swal.fire(noProperties()).then(res => console.log()))} */}
      <div className="flex flex-wrap justify-center sm:flex-row lg:shadow-2xl">
        <Pagination nButtons={nButtons} currentPage={page} />
        {_publications?.length &&
          _publications.map((publication, i) => {
            const { idPublication, modality, price, id } = publication
            const mainData = {
              idPublication,
              modality,
              price,
            }
            const { address, idCity, photos, bedrooms, bathrooms, type } =
              publication.Property
            const details = {
              address,
              city: idCity /* Temporal hasta refactor de autocomplete & API cities */,
              photo: photos[0],
              bedrooms,
              bathrooms,
              type,
            }

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
            )
          })}
      </div>
    </div>
  )
}
