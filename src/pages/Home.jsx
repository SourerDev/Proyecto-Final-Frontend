import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../components/Pagination.jsx'
import { PropertyCard } from '../components/cards/PropertyCard.jsx'
import { arrayPaginator } from '../utils'
import { actionsApp } from '../redux2.0/reducers'
import ModalAF from '../components/modal/ModalAdvancedFilters.jsx'
//import LandingSearch from '../../components/landingSearch/LandingSearch.jsx';
import swal from 'sweetalert2'
import { noProperties } from '../sweetAlerts/sweetAlerts.js'
import { LoadingProperties } from '../components/loaders/LoadingProperties.jsx'
//import state from 'sweetalert/typings/modules/state.js';
import { AdvancedFilters } from '../components/advanced-filters/AdvancedFilters.jsx'

export function Home({ scrollY }) {
  // const {favorites}  = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { publications } = useSelector((state) => state.publication)
  const { page } = useSelector((state) => state.app)
  const { signIn } = useSelector((state) => state.user)

  const CARDS_PER_PAGE = 9
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

  return (
    <div>
      {modalOn && <ModalAF setModalOn={setModalOn} />}
      <br />
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center justify-between py-3 px-6">
          <Pagination
            nButtons={nButtons}
            currentPage={page}
            setPage={(page) => dispatch(actionsApp.setPage(page))}
          />
          <AdvancedFilters scrollY={scrollY} />
        </div>
        {_publications?.length ? (
          <div className="gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:justify-center">
            {_publications.map((publication, i) => {
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
                <PropertyCard
                  key={i}
                  mainData={mainData}
                  details={details}
                  user={user}
                  signIn={signIn}
                />
              )
            })}
          </div>
        ) : (
          <LoadingProperties cards={CARDS_PER_PAGE} />
        )}
      </div>
    </div>
  )
}
