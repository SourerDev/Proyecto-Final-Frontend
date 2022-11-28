import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/actions"
import {Link} from "react-router-dom"
import Loading from "../Loading-mercadopago/Loading"

export default function Redirect() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetUser())
  })
  
  /* return (
    <div>
      <Loading/>
      <div className="text-center my-8"><h1 className="text-gray-900 text-3xl">Por favor termine el pago en la ventana emergente</h1></div>
      <Link to="/">
        <button class="w-full inline-block px-16 py-8 border-2 border-blue-600 text-blue-600 font-medium text-2xl leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" >
          INICIO
        </button>
      </Link>
    </div>
  ) */
}