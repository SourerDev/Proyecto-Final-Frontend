import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../components/Pagination.jsx'
import { PropertyCard } from '../components/cards/PropertyCard.jsx'
import { arrayPaginator } from '../utils'
import { actionsApp } from '../redux2.0/reducers'
import AdvancedFilters from '../components/advanced-filters/AdvancedFilters.jsx'
import ModalAF from '../components/modal/ModalAdvancedFilters.jsx'
//import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';
import swal from 'sweetalert2'
import { noProperties } from '../sweetAlerts/sweetAlerts.js'
//import state from 'sweetalert/typings/modules/state.js';

export function Home() {
  // const {favorites}  = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { publications } = useSelector((state) => state.publication)
  const { page } = useSelector((state) => state.app)
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
      <div className="flex flex-col items-center">
        <Pagination
          nButtons={nButtons}
          currentPage={page}
          setPage={(page) => dispatch(actionsApp.setPage(page))}
        />
        <div className='sm:flex sm:flex-wrap gap-1 sm:justify-center'>
          {_publications?.length &&
            _publications.map((publication, i) => {
              const { idPublication, modality, price, id } = publication
              const mainData = {
                idPublication,
                modality,
                price,
              }
              const { address, City, photos, bedrooms, bathrooms, type } =
                publication.Property
              const details = {
                address,
                city: City /* Temporal hasta refactor de autocomplete & API cities */,
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
    </div>
  )
}
