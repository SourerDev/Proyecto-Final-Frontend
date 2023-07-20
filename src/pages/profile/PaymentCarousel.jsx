import { CheckIcon } from '@heroicons/react/24/outline'
import { Carousel } from '../../components/carousels/Carousel'
import { Alerts } from '../../utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetUser } from '../../redux2.0/reducers/User'

export function PaymentCarousel({ linkPago = '#' }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const payments = [
    { price: 0.25, time: 'Semanal' },
    { price: 0.26, time: 'Mensual' },
    { price: 0.27, time: 'Anual' },
  ]

  if (!payments) return null
  const blank = '_blank'

  function redirect() {
    Alerts.completePayment().then((r) => {
      dispatch(resetUser())
      navigate('/home')
    })
  }

  return (
    <div className="w-[370px] shadow-md">
      <Carousel>
        {payments.map((pay, i) => (
          <div
            key={i}
            className="flex h-[500px] min-w-full flex-col items-center justify-around bg-secondary p-10 text-text/80"
          >
            <h2 className="mb-3 text-3xl font-bold">Premium</h2>
            <p>
              $ {pay.price} / {pay.time}
            </p>
            <ul className="my-4 h-40">
              <li className="flex items-center gap-4">
                <CheckIcon className="h-8 w-8 stroke-2 text-green-600" />
                <span>Sube tus publicaciones</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon className="h-8 w-8 stroke-2 text-green-600" />
                <span>And more</span>
              </li>
            </ul>
            <a onClick={() => redirect()} href={linkPago} target={blank}>
              <button className="my-3 rounded-md bg-primary px-8  py-4 font-medium text-gray-100 transition-transform duration-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50">
                Comienza
              </button>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
