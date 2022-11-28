import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loadUserInfo, resetUser} from "../../redux/actions"
import {API_URL} from "../../services/api/baseApi"
import swal from 'sweetalert2';
import {completePayment, paymentError, paymentOk} from "../../sweetAlerts/sweetAlerts"

export default function BePremium() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [linkPago, setLinkPago] = useState("#")
  const [redirect, setRedirect] = useState(false)
  const {user} = useSelector(state => state)

  useEffect(() => {
    if(user.user_type === "userLogged") {
      axios.post(`${API_URL}/payments`, {user_id: user.id_User})
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
          dispatch(loadUserInfo(r.data.Message))
        })
      }
      else {
        console.log("ocurrio un error inesperado")
        console.log(status)
      }
    }
  }, [user, location])

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

  if(status && status === "aproved") {
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
console.log(user)
  return (
    <div className="bg-gray-300">
      <div className=" h-20 text-center text-2xl mt-14"><h1>bienvenido {user.userName} aste <a className="underline decoration-pink-500 text-2xl">premium</a></h1></div>
      <div className="flex lg:flex-row justify-center self-center flex-col h-5/6">
      <div className="text-center w-64 flex justify-center ml-16 lg:mr-20 lg:mt-6 h-64">
        <p className="text-lg">Al volverte usuario premium pagando la membresía mensual podras subir tus publicaciones para la venta o alquiler, posicionarte en el mercado de propiedades, interactuar con los usuarios y comunicarte con los interesados en tu publicación.</p>
      </div>
      
   
      <div className=" text-center font-semibold lg:mr-20 lg:ml-16 lg:mt-6">
        <h4>Usuario premium</h4>
        <p>Costo mensual: $5.000 (ars)</p></div>
         </div> 
       
          {
            linkPago !== "#" ?
            (
              <a 
                onCl
                className="border-solid border-2 border-sky-500"
                href={linkPago}
                onClick={(e) => setRedirect(true)}
                target="_blank"
              >
                hacerme premium!
              </a>
            )
            : (
                <button
                class="w-full inline-block px-16 py-8 border-2 border-blue-600 text-blue-600 font-medium text-2xl leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                disabled={true}>
                  hacerme premium!
                </button>
              )
          }
      
    </div>
  )
}