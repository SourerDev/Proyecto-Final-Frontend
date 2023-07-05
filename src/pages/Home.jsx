import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../components/Pagination.jsx'
import { PropertyCard } from '../components/cards/PropertyCard.jsx'
import { arrayPaginator } from '../utils'
import { actionsApp } from '../redux2.0/reducers'
//import ModalAF from '../components/modal/ModalAdvancedFilters.jsx'
import { LoadingProperties } from '../components/loaders/LoadingProperties.jsx'
import { AdvancedFilters } from '../components/advanced-filters/AdvancedFilters.jsx'
import { actionsUser } from '../redux2.0/reducers'
import { ApiPropYou } from '../services/index.js'


export function Home({ scrollY }) {
  const dispatch = useDispatch()
  const { publications } = useSelector((state) => state.publication)
  const { page } = useSelector((state) => state.app)
  const { signIn, saveds, session } = useSelector((state) => state.user)

  const CARDS_PER_PAGE = 9
  const { newArr, nButtons } = arrayPaginator(
    publications,
    CARDS_PER_PAGE,
    page
  )
  const _publications = newArr

  const [modalOn, setModalOn] = useState(false)

  function setCurrentSaved(savedValue = true, id) {
    const newSaveds = { ...saveds }
    if (savedValue) {
      const d = delete newSaveds[id]
      console.log(d, newSaveds)
      return dispatch(actionsUser.setSaveds(newSaveds))
    } else {
      newSaveds[id] = session.idUser
      return dispatch(actionsUser.setSaveds(newSaveds))
    }
  }

  useEffect(() => {
    if (session?.idUser) {
      return () => {
        const newSaveds = Object.keys(saveds)
        ApiPropYou.setSaveds(session.idUser, newSaveds)
      }
    }
  }, [])

  return (
    <div>
      {/* modalOn && <ModalAF setModalOn={setModalOn} /> */}
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
                  saved={saveds[idPublication] ? true : false}
                  setCurrentSaved={setCurrentSaved}
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
