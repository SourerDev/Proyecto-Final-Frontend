import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { LoaderIcon } from '../../components/loaders/Loader'
import { ApiPropYou } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { PropertyCard } from '../../components/cards/PropertyCard'
import { Link } from 'react-router-dom'
import { Button } from '../../components/form/buttons/Button'
import { GoBackButton } from '../../components/form/buttons/GoBack'

export function SavedProperties() {
  const dispatch = useDispatch()
  const { session, saveds } = useSelector((state) => state.user)
  const [publications, setPublications] = useState(false)

  useEffect(() => {
    ApiPropYou.getSavedPublications(session.idUser).then((res) => {
      setPublications(res.data.publications)
    })
    if (session?.idUser) {
      return () => {
        const newSaveds = Object.keys(saveds)
        ApiPropYou.setSaveds(session.idUser, newSaveds)
      }
    }
  }, [])

  function setCurrentSaved(savedValue = true, id) {
    const newSaveds = { ...saveds }
    if (savedValue) {
      delete newSaveds[id]
      return dispatch(actionsUser.setSaveds(newSaveds))
    } else {
      newSaveds[id] = session.idUser
      return dispatch(actionsUser.setSaveds(newSaveds))
    }
  }
  return (
    <>
      <GoBackButton className="m-2 rounded-md" />
      {!publications && (
        <LoaderIcon className="fixed bottom-2 left-2 w-[40px]" />
      )}
      {publications?.length ? (
        <div className="gap-x-6 gap-y-4 py-3 sm:flex sm:flex-wrap sm:justify-center">
          {publications.map((publication, i) => {
            const { idPublication, modality, price, id } =
              publication.Publication
            const mainData = {
              idPublication,
              modality,
              price,
            }
            const { address, City, photos, bedrooms, bathrooms, type } =
              publication.Publication.Property
            const details = {
              address,
              city: City /* Temporal hasta refactor de autocomplete & API cities */,
              photo: photos[0],
              bedrooms,
              bathrooms,
              type,
            }

            const user = {
              ...publication.Publication.User,
              avatar: publication.Publication.User?.photo,
            }
            return (
              <PropertyCard
                saved={saveds[idPublication] ? true : false}
                setCurrentSaved={setCurrentSaved}
                key={i}
                mainData={mainData}
                details={details}
                user={user}
                signIn={true}
              />
            )
          })}
        </div>
      ) : null}
      {publications && !publications.length && (
        <div className="flex justify-center items-center border-2  py-8">
          <div className="w-fit flex flex-col items-center gap-3 ">
            <h1>Lo sentimos, no tienes publicaciones guardadas</h1>
            <Link to="/home" className=''>
              <Button>
                <p>ver propiedades</p>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
