import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserInfo, resetUser } from '../../redux/actions'
import { API_URL } from '../../services/api/baseApi'
import swal from 'sweetalert2'
import {
  completePayment,
  paymentError,
  paymentOk,
} from '../../sweetAlerts/sweetAlerts'
import Footer from '../../components/footer/Footer'

export default function BePremium() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [linkPago, setLinkPago] = useState('#')
  const [redirect, setRedirect] = useState(false)
  const { user } = useSelector((state) => state)

  useEffect(() => {
    if (user?.user_type === 'userLogged') {
      axios
        .post(`${API_URL}/payments`, { user_id: user?.id_User })
        .then((r) => {
          setLinkPago(r.data)
        })
    }
    if (status) {
      if (status === 'approved') {
        axios.put(`${API_URL}/users/upDate/${user_id}`).then((r) => {
          return dispatch(loadUserInfo(r.data.Message))
        })
      }
    }
  }, [])

  if (redirect) {
    //navigate("/redirect")

    swal.fire(completePayment()).then((res) => {
      dispatch(resetUser())
      navigate('/')
    })
  }

  const status = new URLSearchParams(location.search).get('status')
  const user_id = new URLSearchParams(location.search).get('external_reference')

  if (status && status === 'approved') {
    swal.fire(paymentOk()).then((res) => navigate('/'))
  } else if (status && status === 'rejected') {
    swal.fire(paymentError())
  }

  /* if(status) {
    if(status === "approved") {
      axios.put(`${API_URL}/users/upDate/${user_id}`)
      .then((r) => {
        console.log(r)
        dispatch(loadUserInfo(r.data.Message))
      })
    }
    else {
      console.log("ocurrio un error inesperado")
      console.log(status)
    }
  } */

  return (
    <div className="bg-[url('https://wrmx00.epimg.net/radio/imagenes/2022/02/22/martha_debayle/1645547060_000751_1645549058_noticia_normal.jpg')] bg-cover bg-center bg-no-repeat  px-3 lg:h-screen lg:px-20 ">
      <div className=" bg-opacity-75 ">
        <div className=" flex justify-center text-center text-6xl underline ">
          <h1 className="">Bienvenido {user?.userName} </h1>
        </div>
        <div className="flex   flex-col ">
          <div className=" mt-10 flex h-[10vh] flex-col items-center justify-center rounded-lg text-2xl ">
            <div className="rounded-lg border-4 border-black bg-white bg-opacity-60 p-4 text-black shadow-2xl">
              <h4 className="flex justify-center">Usuario PREMIUM</h4>
              <p>Costo mensual: $5.000 (ars)</p>
            </div>
          </div>
        </div>
        <div className="bg mb-3 mt-20 flex justify-center rounded-lg bg-white  bg-opacity-60  p-10 px-10  lg:mb-20 ">
          <p className="text-2xl text-black ">
            Al volverte usuario premium pagando la membresía mensual podras
            subir tus publicaciones para la venta o alquiler, posicionarte en el
            mercado de propiedades, interactuar con los usuarios y comunicarte
            con los interesados en tu publicación.
          </p>
        </div>

        <div className="mb-20 flex justify-center">
          {linkPago !== '#' ? (
            <a
              className=" whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              href={linkPago}
              onClick={(e) => setRedirect(true)}
              target=""
            >
              Hacerme premium!
            </a>
          ) : (
            <div className="flex justify-center ">
              <button
                className="w-50  m-3 mx-auto flex rounded border-2 border-blue-600 p-6 px-8 py-4 text-xs font-medium uppercase leading-normal text-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:border-gray-800 disabled:bg-gray-300 disabled:text-gray-700 hover:bg-black hover:bg-opacity-5"
                disabled={true}
              >
                Hacerme premium!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
