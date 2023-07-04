import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAuthorizationWithToken } from '../../services'
import { actionsUser, actionsApp } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { saveInStorage, Alerts } from '../../utils'
import { Input } from '../../components/form/inputs/Input'
import { PasswordInput } from '../../components/form/inputs/PasswordInput'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { GoogleSignin } from '../../modules/authentication/GoogleSignin'

export function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState({ state: true, msg: '' })

  async function handleSubmit(email, password) {
    if (!email || !password) return
    try {
      const response = await ApiPropYou.signIn({
        email,
        password,
      })
      const { user, token } = response.data
      dispatch(actionsUser.setUser(user))

      const saveds = await ApiPropYou.setSaveds(user.idUser)
      dispatch(actionsUser.setSaveds(saveds.data.dictionary))

      saveInStorage('token', token)
      addAuthorizationWithToken(token)
      navigate('/home')
    } catch ({ response, message }) {
      if (response)
        setResponse({
          state: false,
          msg: `Error - ${response.data.Error}`,
        })
      else setResponse({ state: false, msg: message })
    }
  }

  useEffect(() => {
    dispatch(actionsApp.setViewNav(false))
    return () => dispatch(actionsApp.setViewNav(true))
  }, [])

  return (
    <>
      <div className="flex h-[3.5rem] items-center justify-end px-8">
        <Link
          to="/home"
          className="group bg-transparent shadow-none hover:bg-transparent"
        >
          <XMarkIcon className="h-auto w-9 text-gray-400 group-hover:text-gray-600" />
        </Link>
      </div>
      <section className="h-[87vh]">
        <div className="h-full px-6 text-gray-800">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
            <div className=" shrink-1 mb-12 hidden grow-0 basis-auto md:mb-0 md:w-9/12 lg:flex lg:w-6/12 lg:shrink-0 xl:w-6/12">
              <img
                src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSubmit(email, password)
                }}
              >
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <GoogleSignin navigateTo='/home '/>
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                  <p className="mx-4 mb-0 text-center font-semibold">O</p>
                </div>

                <div className="mb-6">
                  <Input
                    name="email"
                    type="email"
                    className=""
                    placeholder="correo electronico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <PasswordInput
                    name="password"
                    placeholder="contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:items-center">
                  {/* <Link to="/"> */}
                  {!response.state && (
                    <p className="my-2 w-full rounded-md bg-red-200 px-2 text-red-700 sm:w-auto">
                      {response.msg}
                    </p>
                  )}
                  <div className="my-2 flex w-full flex-col gap-y-4 p-2">
                    <p className="flex justify-between text-sm">
                      <span
                        onClick={() =>
                          Alerts.soon({ text: 'Acción Proximamente' })
                        }
                        className="cursor-pointer hover:font-medium hover:underline"
                      >
                        ¿Olvidaste tu Contraseña?
                      </span>
                      <Link
                        to="/sign-up"
                        className="text-blue-700 hover:font-medium"
                      >
                        Registrarme
                      </Link>
                    </p>
                    <input
                      type="submit"
                      className="inline-block min-w-[170px] cursor-pointer self-center rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg"
                      value={'Iniciar Sesión'}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
