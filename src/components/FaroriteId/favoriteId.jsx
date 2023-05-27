import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card.jsx'
import callsApi from '../../services'
import { findNameCity } from '../../utils/autocompleteUtils.js'
import { Link } from 'react-router-dom'
import Nav from '../../components/nav-bar/Nav'

export default function Favoriteid() {
  let { id_User } = useParams()
  const { properties, citiesA } = useSelector((state) => state)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    callsApi.favoritesbyId_user(id_User).then((res) => {
      const data = properties.filter((ele) => res.data.includes(ele.id))
      setFavorites(data)
    })
  }, [properties])

  return (
    <div className="px-4">
      <Nav />
      <div className=" my-5">
        <Link to="/home">
          <button className="whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Volver
          </button>
        </Link>
      </div>
      <div className="h-14  rounded-lg bg-gray-800 text-center  text-3xl font-bold text-white ">
        <p className="inline-block align-middle">Mis favoritos</p>
      </div>

      <div className="flex flex-wrap justify-center sm:flex-row lg:shadow-2xl ">
        {favorites?.length > 0 ? (
          favorites.map((ele, i) => (
            <div key={i} className="my-2 px-4 lg:px-9">
              <Card
                key={ele.id}
                id={ele.id}
                favorite={true}
                city={findNameCity(citiesA, ele.idCity)}
                modality={ele.modality}
                address={ele.address}
                price={ele.price}
                images={ele.images}
                garage={ele.garage}
                idUser={id_User}
                userProperty={ele.User}
              />
            </div>
          ))
        ) : (
          <h1 className="m-2 flex flex-col text-center text-2xl ">
            Sin Favoritos
            <dd>
              Para agregar favoritos a tu lista, seleccionelos en el inicio.
              <Link to="/home">
                <div className="">
                  <button className="whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Inicio
                  </button>
                </div>
              </Link>
            </dd>
          </h1>
        )}
      </div>
    </div>
  )
}
