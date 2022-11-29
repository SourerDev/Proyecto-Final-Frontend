import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loadUserInfo, resetUser} from "../../redux/actions"
import {API_URL} from "../../services/api/baseApi"
import swal from 'sweetalert2';
import {completePayment, paymentError, paymentOk} from "../../sweetAlerts/sweetAlerts"
import Footer from "../../components/footer/Footer"

export default function BePremium() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [linkPago, setLinkPago] = useState("#")
  const [redirect, setRedirect] = useState(false)
  const {user} = useSelector(state => state)

  useEffect(() => {
    if(user?.user_type === "userLogged") {
      axios.post(`${API_URL}/payments`, {user_id: user?.id_User})
      .then(r => {
        console.log(r)
        setLinkPago(r.data)
      })
    }
    if(status) {
      if(status === "approved") {
        axios.put(`${API_URL}/users/upDate/${user_id}`)
        .then((r) => {
          console.log(r)
          return dispatch(loadUserInfo(r.data.Message))
        })
      }
      else {
        console.log("ocurrio un error inesperado")
        console.log(status)
      }
    }
  }, [])

  if(redirect) {
    //navigate("/redirect")
    
    swal.fire(completePayment())
    .then(res => {
      dispatch(resetUser())
      navigate("/")
    })
  }
  
  const status = new URLSearchParams(location.search).get("status")
  const user_id = new URLSearchParams(location.search).get("external_reference")

  if(status && status === "approved") {
    console.log(status)
    swal.fire(paymentOk())
    .then(res => navigate("/"))
  }
  else if(status && status === "rejected") {
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
    <div className="h-screen px-3 lg:px-20 bg-[url('https://wrmx00.epimg.net/radio/imagenes/2022/02/22/martha_debayle/1645547060_000751_1645549058_noticia_normal.jpg')]  bg-no-repeat bg-cover bg-center ">
      <div className=" bg-opacity-75 ">
      <div className=" underline text-center flex justify-center text-6xl mt-20">
        <h1 className="">Bienvenido {user?.userName}  </h1>
      </div>
      <div className="flex   flex-col ">
      
      
   
      <div className=" mt-10 rounded-lg h-[10vh] text-2xl flex justify-center items-center flex-col ">
        <div className="border-4 border-black text-gray-800 bg-white bg-opacity-30 rounded-lg shadow-2xl p-4">
        <h4 className="flex justify-center">Usuario PREMIUM</h4>
        <p>Costo mensual: $5.000 (ars)</p>
        </div>
       

      </div>
         </div> 
         <div className="p-10 mb-3 lg:mb-20 bg-opacity-30 px-10 bg-white bg  rounded-lg  flex justify-center  mt-20 ">
        <p className="text-2xl  ">Al volverte usuario premium pagando la membresía mensual podras subir tus publicaciones para la venta o alquiler, posicionarte en el mercado de propiedades, interactuar con los usuarios y comunicarte con los interesados en tu publicación.</p>
      </div> 
       
        <div className="flex justify-center">
       
          {
            linkPago !== "#" ?
            (
              <a 
                onCl
                className=" whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                href={linkPago}
                onClick={(e) => setRedirect(true)}
                target="_blank"
              >
                Hacerme premium!
              </a>
            )
            : (
              <div className="flex justify-center ">
                <button
                className="disabled:bg-gray-300  disabled:text-gray-700 disabled:border-gray-800 disabled:cursor-not-allowed flex mx-auto m-3 p-6 w-50 px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                disabled={true}>
                  Hacerme premium!
                </button>
                </div>
              )
          }
          </div>
      </div>
    </div>
  )
}