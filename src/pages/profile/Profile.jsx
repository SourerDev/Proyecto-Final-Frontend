import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionsUser } from '../../redux2.0/reducers'
import { useNavigate } from 'react-router-dom'
import { actualizar } from '../../sweetAlerts/sweetAlerts'
import swal from 'sweetalert2'
import { ApiPropYou } from '../../services'
import { Alerts } from '../../utils'
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../../components/form/buttons/Button'

export function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { session, signIn } = useSelector((state) => state.user)
  const [newUser, setNewUser] = useState({
    userName: session.userName,
    fName: session.fName,
    lName: session.lName,
    cellphone: session.cellphone,
    email: session.email,
    photo: session.photo,
  })
  const [errs, setErrs] = useState({})

  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if (!signIn) {
      Alerts.smallWarning({ text: 'Lo sentimos, no autorizado' })
      navigate('/')
    }
  }, [newUser, errs])

  function onUserChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
    /* setErrs(
      isValidUser({
        ...newUser,
        [e.target.name]: e.target.value,
      })
    ); */
  }
  if (!signIn) return null

  if (signIn)
    return (
      <div className="flex flex-col py-4 md:flex-row">
        <section className="flex w-full flex-col items-center justify-center border-b">
          <picture className="h-[10rem] w-[10rem] rounded-full border relative">
            <img src={session.photo} alt={`@${session.userName}'s image`} />
            {edit && (
              <button className='group w-8 absolute bottom-3 right-5 p-1 rounded-xl bg-gray-50/50 hover:bg-black/50 aspect-squares grid place-content-center hover:text-white'>
                <PencilIcon className='w-full h-auto'/>
              </button>
            )}
          </picture>
          <p className="flex flex-col text-left">
            <span className="text-2xl font-medium">{`${session.fName} ${session.lName}`}</span>
            <span className="-mt-2 text-gray-600">{`@${session.userName}`}</span>
          </p>
          <div>
            <p className="flex items-center justify-start gap-x-2">
              <DevicePhoneMobileIcon className="aspect-square w-6" />
              <span> {`${session.cellphone || '+57 322 6215456'}`}</span>
            </p>
            <p className="flex items-center justify-start gap-x-2">
              <EnvelopeIcon className="aspect-square w-6" />
              <span>{`${session.email}`}</span>
            </p>
          </div>
          <Button onClick={() => setEdit(true)}>Editar</Button>
        </section>
        <section className="">
          verify Email
          <Button>Verificar</Button>
          <Button>Cambiar</Button>
          Email: {session.email}
          <Button>Delete Account</Button>
        </section>
      </div>
    )

  return (
    <div className="lg:[4rem] flex h-[40rem] flex-col items-center justify-center sm:h-[43rem]">
      <p className="self-right text-2xl">Editar usuario</p>
      <div className="h-16 w-16 overflow-hidden rounded-full">
        <img
          className="w-full rounded-full"
          src={
            newUser.photo ||
            'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
          }
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center ">
        <label
          htmlFor="userName"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Usuario
        </label>
        <input
          type="text"
          name="userName"
          className="  block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={session?.userName || 'sin nombre de usuario'}
          value={newUser?.userName}
          onChange={(e) => onUserChange(e)}
        />
      </div>
      {errs?.userName && (
        <p className="text-red-600 dark:text-red-500">{errs.userName}</p>
      )}
      <div className="flex flex-col justify-center ">
        <label
          htmlFor="userName"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          name="fName"
          className="  block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={session?.fName || 'sin nombre de usuario'}
          value={newUser.fName}
          onChange={(e) => onUserChange(e)}
        />
      </div>
      <div className="flex flex-col justify-center ">
        <label
          htmlFor="userName"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Apellido
        </label>
        <input
          type="text"
          name="lName"
          className="  block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={session?.lName || 'sin nombre de usuario'}
          value={newUser.lName}
          onChange={(e) => onUserChange(e)}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefono
        </label>
        <input
          type="numer"
          name="cellphone"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={session?.cellphone}
          value={newUser?.cellphone}
          onChange={(e) => onUserChange(e)}
        />
        {errs?.cellphone && (
          <p className="text-red-600 dark:text-red-500">{errs?.cellphone}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={session?.email}
          value={newUser.email}
          onChange={(e) => onUserChange(e)}
        />
        {errs?.email && (
          <p className="text-red-600 dark:text-red-500">{errs?.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="photo"
          className="m-1 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Avatar
        </label>
        <input
          type="text"
          name="photo"
          className="mb-4 block w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={'se le asignara un avatar por defecto'}
          value={newUser.photo}
          onChange={(e) => onUserChange(e)}
        />
      </div>
      <div className="">
        <Link>
          <button
            disabled={Object.values(errs)?.length ? true : false}
            className="rounded-lg bg-blue-700 px-4  py-3 text-center text-xs font-medium text-white focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 hover:bg-gradient-to-br dark:focus:ring-blue-900"
            onClick={() => {
              ApiPropYou.updateUser({
                idUser: session.idUser,
                data: { ...newUser },
              })
                .then((res) => {
                  dispatch(actionsUser.setUser(res.data.user))
                  const axu = <Link to="/home"></Link>
                  swal.fire(actualizar(axu))
                })
                .catch((err) => {
                  swal.fire('Algo salio mal', `${err.message}`, 'error')
                })

              // setDisabled(true)
              //navigate("/")
            }}
          >
            Actualizar
          </button>
        </Link>
      </div>

      <button
        className="rounded-lg bg-blue-700 px-4  py-3 text-center text-xs font-medium text-white focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 hover:bg-gradient-to-br dark:focus:ring-blue-900"
        onClick={() => {
          if (!session?.user_type || session?.user_type === 'userPremiun') {
            navigate('/createProperty')
          } else {
            swal.fire(
              'Algo salio mal,',
              'deves ser usuario Premiun',
              navigate('/bePremium')
            )
          }
        }}
      >
        Create Property
      </button>
    </div>
  )
}
