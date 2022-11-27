import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUserInfo, postSignUp } from "../../redux/actions/index";
import callsApi from "../../services";
import { authentication } from "../../firabase/Firabase.Config.jsx";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { async } from "@firebase/util";
import {saveIdInLocalStorage} from '../../utils/saveIdInLocalStorage'

export default function LogIn() {
  function mostrarContrasena() {
    var tipo = document.getElementById("exampleFormControlInput26");
    if (tipo.type == "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({ state: true, msg: "" });

  const setNavigate =()=>{
     const saveProperty = localStorage.getItem('property');

    if(saveProperty?.length){
      navigate(`/detail/${saveProperty}`)
      saveIdInLocalStorage(false)
    } else{
      navigate('/')
     }
  }

  const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const { user } = await signInWithPopup(authentication, provider);
    let data = {
      email: user.email,
      photo: user.photoURL,
      userName: user.displayName,
      password: user.uid,
      user_type:"userLogged"
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
      dispatch(loadUserInfo({...Message,favorites:Message.favorites.map(el=>el.id_Property)}));
      setResponse({ state: true, msg: "" });
      setNavigate()
    }

    /* 
    localStorage.setItem(
        "accessToken",
        JSON.stringify(result.user.accessToken)
    );
    */
  };

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  async function handleSubmit(data) {
    if (!data.email) return;
    try {
      const response = await callsApi.login(data);
      const { Message, token } = response.data;
      if (Message) {
        dispatch(loadUserInfo({...Message,favorites:Message.favorites.map(el=>el.id_Property)}));
        setResponse({ state: true, msg: "" });
        console.log(response.data);
        setNavigate()
      }else{
        setResponse({ state: false, msg: response.data.Error });
      }    
    } catch (error) {
      setResponse({ state: false, msg: error.message });
    }
  }

  return (
    <div className="h-[87vh]">
      <section className="h-full">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className=" hidden lg:flex grow-0 shrink-1 lg:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(data);
                }}
              >
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Iniciar sesión con :</p>
                  <div onClick={handleClickGoogle}>
                    <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      GOOGLE
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">O</p>
                </div>

                <div className="mb-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="correo electronico"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="">
                  <div className="w-full relative">
                    <input
                      name="password"
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput26"
                      placeholder="contraseña"
                      onChange={(e) => handleChange(e)}
                    />
                    <button
                      className="h-full absolute z-10 top-0 right-0 text-gray-600 hover:text-gray-800 px-1"
                      type="button"
                      onClick={(e) => mostrarContrasena(e)}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:items-center">
                  {/* <Link to="/"> */}
                  {!response.state && (
                    <p className="px-2 my-2 text-red-700 bg-red-200 rounded-md w-full sm:w-auto">
                      {response.msg}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-center">
                    <input
                      type="submit"
                      className="mt-2 sm:my-2 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      value={"Iniciar Sesión"}
                    />

                    <Link to="/signup">
                      <button className="w-full my-2 inline-block px-7 py-3 bg-red-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed">
                        Registrarme
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
