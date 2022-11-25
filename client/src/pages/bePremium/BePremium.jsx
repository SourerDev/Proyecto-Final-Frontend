import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"


export default function BePremium() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [linkPago, setLinkPago] = useState("#")
  const [redirect, setRedirect] = useState(false)
  const {user} = useSelector(state => state)

  useEffect(() => {
    if(user.user_type === "userLogged") {
      axios.post("http://localhost:3001/payments")
      .then(r => setLinkPago(r.data))
    }
  }, [user, location])

  if(redirect) {
    navigate("/redirect")
  }

  const status = new URLSearchParams(location.search).get("status")
  console.log(location.search)
  console.log(status)
  
  if(status) {
    if(status === "approved") {
      // modal
      console.log(user)
      axios.put(`http://localhost:3001/users/upDate/:${user.id_User}`)
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