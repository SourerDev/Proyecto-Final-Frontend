import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

export default function BePremium() {
  const navigate = useNavigate()
  const {status} = useParams()
  const [linkPago, setLinkPago] = useState("#")
  const {user} = useSelector(state => state)


  useEffect(() => {
    /* if(user.user_type === "userLogged") {
      axios.post("http://localhost:3001/payments")
      .then(r => setLinkPago(r))
    } */
    console.log("vercelll pai")
      axios.post("http://localhost:3001/payments")
      .then(r => setLinkPago(r.data))
    
  }, [user])

  

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
                className="border-solid border-2 border-sky-500"
                href={linkPago}
                disabled={true}
                target="_blank"
              >
                hacerme premium!
              </a>
            )
            : (
                <button disabled={true}>
                  no podes
                </button>
              )
          }
      </div>
    </div>
  )
}