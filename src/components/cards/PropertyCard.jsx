import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '../../assets'
import { removeFavorite, addFavorites } from '../../redux/actions/index'
import callsApi from '../../services'

export function PropertyCard({
  mainData,
  details,
  user,
  favorite,
  saved,
  setActualSaved,
  signIn,
  session,
}) {
  const { idPublication, modality, price } = mainData
  const { address, city, photo, bedrooms, bathrooms, type } = details
  const { avatar, email, active, lName, fName, rating, idUser, cellphone } =
    user
  const dispatch = useDispatch()

  const [state, setState] = useState({
    favorite: favorite,
    hover: false,
  })

  const onHover = (evt, value) => {
    evt.preventDefault()
    setState((previus) => {
      return {
        ...previus,
        hover: value,
      }
    })
  }
  /* const addFavorite = (evt) => {
    evt.preventDefault()
    setState((previus) => {
      return {
        ...previus,
        favorite: previus.favorite ? false : true,
      }
    })
  } */
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  /* useEffect(() => {
    if ((favorite && state.favorite) || (!favorite && !state.favorite)) return
    if (favorite && !state.favorite) {
      dispatch(removeFavorite(idPublication))
      callsApi
        .removeFavorite(idPublication)
        .then((res) => {})
        .catch((err) => {})
    } else if (!favorite && state.favorite) {
      dispatch(addFavorites([idPublication]))
      callsApi
        .postFavorite({ idUser: idUser, id_Property: idPublication })
        .then((res) => {})
        .catch((err) => {})
    }
  }, [state])
 */
  function handleSave() {
    setActualSaved((previous) => {
      let prev = { ...previous }
      if(saved) {
        delete prev[idPublication]
        return prev
      } else {
        return {
          ...previous,
          [idPublication]: session,
        }
      }
    })
  }
  return (
    <div className="flex min-w-[340px] max-w-[341px] flex-col items-center justify-center bg-white p-2 shadow">
      <div className="relative z-10 h-60 w-[95%] overflow-hidden rounded-lg">
        <img className="h-full w-full" src={photo} alt={idPublication} />
        {modality && (
          <div className="absolute bottom-1 left-1 z-20 flex items-center justify-center rounded-lg bg-green-300/75 px-1 font-medium text-green-800">
            <h3>{modality}</h3>
          </div>
        )}
        {/* No estoy seguro que constante hay que poner en el condicional */}
        {signIn && (
          <button
            className="absolute  bottom-1 right-1 flex items-center justify-center rounded-full bg-white p-1 hover:bg-zinc-100"
            onClick={handleSave}
          >
            {saved ? (
              <Icon.Heart fill={'#eb33c6'} width="20" hover={'#a20582'} />
            ) : (
              <Icon.HeartBorder fill={'#eb33c6'} width="20" hover={'#a20582'} />
            )}
          </button>
        )}
      </div>
      <div className="flex h-20 w-full justify-between px-2">
        <div className="flex flex-col justify-center p-2">
          <h3 className="pt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {city.string}
          </h3>
          <span className="-mt-1 pl-2 text-sm">{address}</span>
          <span className="pt-2 text-2xl font-bold text-gray-900 dark:text-white">
            {`${price} US`}
          </span>
        </div>
        <div className="flex items-center justify-center">
          {/* Implementar el uso del componente Avatar.jsx */}
          <div className="relative mt-2 mr-2 flex h-14 w-14 items-center justify-center rounded-full bg-slate-300">
            {email ? (
              <>
                <img
                  className="w-full"
                  src={avatar}
                  alt={idUser}
                  onMouseEnter={(evt) => {
                    onHover(evt, true)
                  }}
                  onMouseLeave={(evt) => {
                    onHover(evt, false)
                  }}
                />
                <div
                  className={classNames(
                    state.hover
                      ? 'absolute bottom-full z-40  mb-2 w-[200px] rounded-xl bg-white p-2 shadow-lg transition-opacity duration-300'
                      : 'hidden'
                  )}
                >
                  <div className="z-50 p-2">
                    <div className="z-50 mb-2 flex flex-col items-center justify-between">
                      <img
                        className="h-14 w-14 rounded-full"
                        src={avatar}
                        alt=""
                      />
                      <div>
                        <p className="text-base font-semibold leading-none text-gray-900 ">
                          {fName}
                        </p>
                        <p className="mb-3 text-sm font-normal">
                          <a className="underline">{email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Icon.User
                className="w-full text-white"
                hover={'#fff'}
                fill={'#fff'}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-between">
        <Link to={`/properties/${idPublication}`}>
          <button className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 hover:shadow dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700">
            Mas Detalle
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}
