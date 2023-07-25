import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert2'
import {
  completePayment,
  paymentError,
  paymentOk,
} from '../../sweetAlerts/sweetAlerts'
import { Alerts } from '../../utils'
import { ApiPropYou } from '../../services'
import { PaymentCarousel } from './PaymentCarousel'
import { setUser } from '../../redux2.0/reducers/User'
import { LoaderIcon } from '../../components/loaders/Loader'

export function BePremium() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [linkPago, setLinkPago] = useState('#')
  const { session, signIn } = useSelector((state) => state.user)

  if (!signIn) {
    Alerts.smallWarning({ text: 'Lo sentimos, primero debes iniciar sesión' })
    navigate('/sign-in')
  }
  useEffect(() => {
    ApiPropYou.paymentUrl(session.idUser).then((res) => setLinkPago(res.data))
  }, [])

  const status = new URLSearchParams(location.search).get('status')
  const user_id = new URLSearchParams(location.search).get('external_reference')

  if (status && !signIn) {
    // modificar despues con la tokenización y uso de cookies
    if (status === 'approved') {
      ApiPropYou.setPremiumUser(user_id).then((r) => {
        ApiPropYou.getUserById(user_id).then((r) => {
          dispatch(setUser(r.data.user))
        })
        swal.fire(paymentOk()).then((r) => navigate('/home'))
      })
    } else if (status && status === 'rejected') {
      ApiPropYou.getUserById(user_id).then((res) => {
        dispatch(setUser(res.data.user))
      })
      swal.fire(paymentError()).then((r) => navigate('/be-premium'))
    }
  }
  if(linkPago.length <= 1) return <LoaderIcon className='fixed bottom-2 left-2 w-[40px]'/>
  return (
    <div className="flex  min-h-[600px] flex-col items-center gap-4 py-8 px-4 text-lg lg:flex-row">
      <div className=" flex w-full flex-col gap-6 p-7 lg:w-3/6 ">
        <h1 className="text-2xl font-semibold">Razon para ser Premium</h1>
        <p>
          Al volverte usuario premium pagando la membresía mensual podras subir
          tus publicaciones para la venta o alquiler, posicionarte en el mercado
          de propiedades, interactuar con los usuarios y comunicarte con los
          interesados en tu publicación.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis
          impedit voluptatem ducimus eveniet, veritatis commodi neque quos
          dolores corporis illum nobis, nisi laborum repellat voluptatibus
          perferendis id delectus sapiente.
        </p>
      </div>
      <div className=" grid w-3/6 place-content-center p-7">
        <PaymentCarousel linkPago={linkPago} />
      </div>
    </div>
  )
}
