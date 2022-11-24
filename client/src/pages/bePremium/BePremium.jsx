import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

export default function BePremium() {
  const navigate = useNavigate()
  const {id_user, res} = useParams()
  const [linkPago, setLinkPago] = useState("#")

  useEffect(() => {
    if(linkPago === "#") {
      axios.post("ruta del back que nos devuelve la url")
      .then(r => setLinkPago(r.data))
    }
  }, [linkPago])


  if(res === "pago") {
    navigate("/home")
  }

  return (
    <div>
      <h1>hola haste premiu</h1>
      <div>
        <p>Al volverte usuario premium pagando la membresía mensual podras subir tus publicaciones para la venta o alquiler, posicionarte en el mercado de propiedades, interactuar con los usuarios y comunicarte con los interesados en tu publicación.</p>
      </div>
      <div>
        <h4>Usuario premium</h4>
        <p>Costo mensual: $5.000 (ars)</p>
        
          <a 
            href={linkPago}
            disabled={linkPago.length ? false : true}
            target="_blank"
          >
            hacerme premium!
          </a>
      </div>
    </div>
  )
}