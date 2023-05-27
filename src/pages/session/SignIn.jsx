import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAuthorizationWithToken } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { authentication } from '../../firabase/Firabase.Config.jsx'
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'
import { saveInStorage, getOfStorage } from '../../utils'

//components
import { Input } from '../../components/form/inputs/Input'
import { PasswordInput } from '../../components/form/inputs/PasswordInput'
import { Button } from '../../components/form/buttons/Button'

export function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState({ state: true, msg: '' })

  const setNavigate = () => {
    const save = getOfStorage('detail')

    if (save?.id) {
      navigate(`/detail/${save.id}`)
    } else {
      navigate('/')
    }
  }

  /* const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const { user } = await signInWithPopup(authentication, provider);
    let data = {
      email: user.email,
      photo: user.photoURL,
      userName: user.displayName,
      password: user.uid,
      user_type: "userLogged",
    };
    let loginValue = false;

    try {
      const post = await callsApi.postSignUp(data);
      if (post?.data === "Usuario creado") {
        loginValue = true;
      }
    } catch (error) {
      let msg = error.response.data;
      if (msg === "User already exist") {
        loginValue = true;
      }
    }

    if (loginValue && data.email) {
      const login = await callsApi.login({
        email: data.email,
        password: data.password,
      });
      const { Message, token } = login.data;
      dispatch(
        loadUserInfo({
          ...Message,
          favorites: Message.favorites.map((el) => el.id_Property),
        })
      );
      setResponse({ state: true, msg: "" });
      setNavigate();
    }
    localStorage.setItem(
        "accessToken",
        JSON.stringify(result.user.accessToken)
    );
  }; */

  async function handleSubmit(email, password) {
    if (!email || !password) return
    try {
      const response = await ApiPropYou.signIn({
        email,
        password,
      })

      const { user, token } = response.data
      dispatch(actionsUser.setUser(user))
      saveInStorage('token', token)
      addAuthorizationWithToken(token)
      navigate('/home')
    } catch ({ response, message }) {
      if (response)
        setResponse({
          state: false,
          msg: `${response.status} - ${response.data.Error}`,
        })
      else setResponse({ state: false, msg: message })
    }
  }

  return (
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
                <p className="mb-0 mr-4 text-lg">Iniciar sesión con :</p>
                <div title="Proximamente">
                  <span className="inline-block rounded-full bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg">
                    GOOGLE
                  </span>
                </div>
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
                <div className="my-2 flex flex-col p-2 sm:flex-row sm:justify-center sm:gap-x-4">
                  <input
                    type="submit"
                    className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg"
                    value={'Iniciar Sesión'}
                  />

                  <Link to="/sign-up">
                    <span className="inline-block w-full rounded bg-red-400 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-red-400 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg">
                      Registrarme
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
