import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ApiPropYou, addAuthorizationWithToken } from '../../services'
import { actionsUser, actionsApp } from '../../redux2.0/reducers'
import { saveInStorage, isValidSingUp } from '../../utils'
import { Input } from '../../components/form/inputs/Input'
import swal from 'sweetalert2'
import { PasswordInput } from '../../components/form/inputs/PasswordInput'
import { GoBackButton } from '../../components/form/buttons/GoBack'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    password2: '',
    cellphone: '',
  })
  const [userName, setUserName] = useState({
    value: '',
    error: '',
  })

  const [errs, setErrs] = useState({})
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
    setErrs(
      isValidSingUp({
        ...data,
        [event.target.name]: event.target.value,
      })
    )
  }

  async function onSubmitSignUp(evt) {
    evt.preventDefault()
    try {
      const response = await ApiPropYou.signUp({
        userName: userName.value,
        ...data,
      })

      const { user, token } = response.data
      dispatch(actionsUser.setUser(user))
      saveInStorage('token', token)

      swal({
        title: 'Ecxelente',
        text: 'Usuario Creado!',
        icon: 'success',
      })
      addAuthorizationWithToken(token)
      navigate('/home')
    } catch ({ response, ...error }) {
      let text = '...'
      if (response?.data?.Error) text = response?.data?.Error
      else {
        if (response?.data === 'User already exist')
          setErrs({ email: 'Correo registrado previamente' })
        text = response?.data
      }

      swal({
        title: 'Error',
        text: `Ha sucedido un error \n ${text}`,
        icon: 'error',
      })
    }
  }
  useEffect(() => {
    dispatch(actionsApp.setViewNav(false))
    return () => dispatch(actionsApp.setViewNav(true))
  }, [])
  return (
    <>
      <div className="flex h-[3.5rem] items-center justify-end px-8">
        <GoBackButton className="group bg-transparent shadow-none hover:bg-transparent">
          <XMarkIcon className="h-auto w-9 text-gray-400 group-hover:text-gray-600" />
        </GoBackButton>
      </div>
      <div className="h-[87vh]">
        <section className="my-4 h-full">
          <div className="h-full px-6 text-gray-800">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
              <div className=" shrink-1 mb-12 hidden grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:flex lg:w-6/12 xl:w-6/12">
                <img
                  src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
                <form onSubmit={onSubmitSignUp}>
                  <div className="mb-6">
                    <Input
                      type="text"
                      value={userName.value}
                      placeholder="Nombre de usuario"
                      autoComplete="off"
                      onChange={({ target }) => {
                        setUserName({
                          value: target.value,
                          error: /^[a-zA-Z0-9_]*$/.test(target.value)
                            ? ''
                            : 'La cadena contiene caracteres no permitidos.',
                        })
                      }}
                    />
                    <ErrorMessage error={userName.error} />
                  </div>
                  <div className="mb-6 sm:flex sm:gap-x-3">
                    <div className="">
                      <Input
                        name="fName"
                        type="fName"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        placeholder="first name"
                        autoComplete="off"
                        onChange={(e) => handleChange(e)}
                      />
                      <ErrorMessage error={errs.fName} />
                    </div>

                    <div className="">
                      <Input
                        name="lName"
                        type="text"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        placeholder="last name"
                        autoComplete="off"
                        onChange={(e) => handleChange(e)}
                      />
                      <ErrorMessage error={errs.lName} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Input
                      name="email"
                      type="email"
                      className=""
                      placeholder="Correo electronico"
                      autoComplete="new-email"
                      onChange={(e) => handleChange(e)}
                    />
                    <ErrorMessage error={errs.email} />
                  </div>
                  <div className="mb-6">
                    <PasswordInput
                      name="password"
                      placeholder="password"
                      autoComplete="off"
                      onChange={(e) => handleChange(e)}
                    />
                    <ErrorMessage error={errs.password} />
                  </div>
                  <div className="mb-6">
                    <PasswordInput
                      name="password2"
                      placeholder="repeat the password"
                      autoComplete="off"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="mb-6">
                    <Input
                      name="cellphone"
                      type="number"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      placeholder="cellphone"
                      autoComplete="off"
                      onChange={(e) => handleChange(e)}
                    />
                    <ErrorMessage error={errs.cellphone} />
                  </div>

                  <div className="grid flex-col items-start gap-2 text-center lg:h-20 lg:grid-cols-3 lg:content-center lg:gap-4 lg:text-left">
                    <button
                      disabled={
                        !(!Object.keys(errs).length && data.email.length)
                      }
                      type="submit"
                      className="disabled: inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-red-400 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg"
                    >
                      Crear Usuario
                    </button>
                    <div>
                      <Link to="/sign-in">
                        <span className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-red-400 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg">
                          Iniciar sesión
                        </span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function ErrorMessage({ error, className, ...props }) {
  if (!error?.length) return null

  return (
    <p
      className={`m-y-1 px-4 text-sm font-semibold text-red-600 ${className}`}
      {...props}
    >
      {error[0].toUpperCase() + error.slice(1)}
    </p>
  )
}
