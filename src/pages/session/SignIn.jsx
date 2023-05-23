import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUserInfo, postSignUp } from "../../redux/actions/index";
import callsApi from "../../services";
import { actionsUser } from "../../redux2.0/reducers";
import { ApiPropYou } from "../../services";
import { authentication } from "../../firabase/Firabase.Config.jsx";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { saveInStorage, getOfStorage } from "../../utils";

//components
import { Input } from "../../components/form/inputs/Input";
import { InputPassword } from "../../components/form/inputs/InputPassword";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({ state: true, msg: "" });

  const setNavigate = () => {
    const save = getOfStorage("detail");

    if (save?.id) {
      navigate(`/detail/${save.id}`);
    } else {
      navigate("/");
    }
  };

  const handleClickGoogle = async () => {
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

    /* 
    localStorage.setItem(
        "accessToken",
        JSON.stringify(result.user.accessToken)
    );
    */
  };

  async function handleSubmit(email, password) {
    if (!email || !password) return;
    try {
      const response = await ApiPropYou.signIn({
        email,
        password,
      });

      const { user, token } = response.data;
      dispatch(actionsUser.setUser(user));
      saveInStorage("token", token);
      navigate("/home");
    } catch (error) {
      setResponse({ state: false, msg: error.message });
    }
  }

  return (
    <section className="h-[87vh]">
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
                handleSubmit(email, password);
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
                <Input
                  name="email"
                  type="email"
                  className=""
                  placeholder="correo electronico"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <InputPassword
                  name="password"
                  placeholder="contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
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

                  <Link to="/sign-up">
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
  );
}
