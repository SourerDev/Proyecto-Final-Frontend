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

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({ state: false, msg: "" });

  const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(authentication, provider);
    let data = {
      email: user.email,
      photo: user.photoURL,
      userName: user.displayName,
      password: user.uid,
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
        console.log('google: »',msg);
        loginValue = true;
      }
    }

    if (loginValue) {
      const login = await callsApi.login({
        email: data.email,
        password: data.password,
      });
      const { Message, token } = login.data;
      dispatch(loadUserInfo(Message));
      setResponse({ state: true, msg: "" });
      navigate("/");
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
    try {
      const response = await callsApi.login(data);
      const { Message, token } = response.data;
      dispatch(loadUserInfo(Message))
      setResponse({state:true, msg:""})
      navigate("/");

      
    } catch (error) {
      const msg = error.response.data.Error
      if (msg) setResponse({ state: false, msg });
      console.log(error.response)
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
                  <p className="text-lg mb-0 mr-4">Iniciar sesion con:</p>
                  <div onClick={handleClickGoogle}>
                    <p>Google</p>
                  </div>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    name="email"
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    name="password"
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput26"
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <Link to="/signup">
                      <button className=" inline-block text-gray-800">
                        Registrarme
                      </button>
                    </Link>
                  </div>
                  <a className="text-gray-800">Recuperar contraseña</a>
                </div>

                <div className="text-center lg:text-left">
                  {/* <Link to="/"> */}
                  {!response.state && response.msg.length > 0 && (
                    <p classNameName="px-2 m-2 text-red-700 bg-red-200 rounded-md">
                      {response.msg}
                    </p>
                  )}
                  <input
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    value={"Iniciar Sesión"}
                  />
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
