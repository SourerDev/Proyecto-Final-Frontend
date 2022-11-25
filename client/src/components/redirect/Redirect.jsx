import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/actions"
import {Link} from "react-router-dom"

export default function Redirect() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetUser())
  })
  return (
    <div>
      <h1>Por favor termine el pago en la ventana emergente</h1>
      <Link to="/">
        <button>
          INICIO
        </button>
      </Link>
    </div>
  )
}