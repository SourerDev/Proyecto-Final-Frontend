import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loadUserInfo } from "../../redux/actions"


export default function BePremium() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [linkPago, setLinkPago] = useState("#")
  const [redirect, setRedirect] = useState(false)
  const {user} = useSelector(state => state)

  useEffect(() => {
    if(user.user_type === "userLogged") {
      axios.post("http://localhost:3001/payments", {user_id: user.id_User})
      .then(r => setLinkPago(r.data))
    }
  }, [user, location])

  if(redirect) {
    navigate("/redirect")
  }

  const status = new URLSearchParams(location.search).get("status")
  const user_id = new URLSearchParams(location.search).get("external_reference")
  console.log(location.search)
  console.log(status)
  console.log(user_id)
  
  if(status) {
    if(status === "approved") {
      // modal donde lo haga loguearse de vuelta
      axios.put(`http://localhost:3001/users/upDate/${user_id}`)
      .then((r) => {
        console.log(r)
        dispatch(loadUserInfo(r.Message))
      })
    }
    else {
      console.log("ocurrio un error inesperado")
      console.log(status)
    }
  }

  return (
    <div>
      <h1>hola haste premiu</h1>
      <div className="">
        <p>Al volverte usuario premium pagando la membresía mensual podras subir tus publicaciones para la venta o alquiler, posicionarte en el mercado de propiedades, interactuar con los usuarios y comunicarte con los interesados en tu publicación.</p>
      </div>
      <div>
        <h4>Usuario premium</h4>
        <p>Costo mensual: $5.000 (ars)</p>
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
                <button disabled={true}>
                  hacerme premium!
                </button>
              )
          }
      </div>
    </div>
  )
}