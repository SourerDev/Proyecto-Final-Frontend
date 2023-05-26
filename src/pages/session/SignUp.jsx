import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiPropYou, addAuthorizationWithToken } from "../../services";
import { actionsUser } from "../../redux2.0/reducers";
import { saveInStorage, isValidSingUp } from "../../utils";
import { Input } from "../../components/form/inputs/Input";
import swal from "sweetalert";
import { PasswordInput } from "../../components/form/inputs/PasswordInput";

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    password2: "",
    cellphone: "",
  });

  const [errs, setErrs] = useState({});
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setErrs(
      isValidSingUp({
        ...data,
        [event.target.name]: event.target.value,
      })
    );
  }

  async function onSubmitSignUp(evt) {
    evt.preventDefault();
    try {
      const response = await ApiPropYou.signUp(data);

      const { user, token } = response.data;
      dispatch(actionsUser.setUser(user));
      saveInStorage("token", token);

      swal({
        title: "Ecxelente",
        text: "Usuario Creado!",
        icon: "success",
      });
      addAuthorizationWithToken(token);
      navigate(`/user/${user.idUser}`);
    } catch ({ response, ...error }) {
      let text = "...";
      if (response?.data?.Error) text = response?.data?.Error;
      else {
        if (response?.data === "User already exist")
          setErrs({ email: "Correo registrado previamente" });
        text = response?.data;
      }

      swal({
        title: "Error",
        text: `Ha sucedido un error \n ${text}`,
        icon: "error",
      });
    }
  }

  return (
    <div className="h-[87vh]">
      <section className="h-full my-4">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className=" hidden lg:flex grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={onSubmitSignUp}>
                <div className="mb-6">
                  <Input
                    name="email"
                    type="email"
                    className=""
                    placeholder="correo electronico"
                    onChange={(e) => handleChange(e)}
                  />
                  <ErrorMessage error={errs.email} />
                </div>

                <div className="mb-6">
                  <Input
                    name="fName"
                    type="fName"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="first name"
                    onChange={(e) => handleChange(e)}
                  />
                  <ErrorMessage error={errs.fName} />
                </div>

                <div className="mb-6">
                  <Input
                    name="lName"
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="last name"
                    onChange={(e) => handleChange(e)}
                  />
                  <ErrorMessage error={errs.lName} />
                </div>

                <div className="mb-6">
                  <PasswordInput
                    name="password"
                    placeholder="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <ErrorMessage error={errs.password} />
                </div>
                <div className="mb-6">
                  <PasswordInput
                    name="password2"
                    placeholder="repeat the password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-6">
                  <Input
                    name="cellphone"
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="cellphone"
                    onChange={(e) => handleChange(e)}
                  />
                  <ErrorMessage error={errs.cellphone} />
                </div>

                <div className="flex-col items-start text-center gap-2 lg:text-left lg:h-20 grid lg:grid-cols-3 lg:gap-4 lg:content-center">
                  <button
                    disabled={!(!Object.keys(errs).length && data.email.length)}
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed disabled:"
                  >
                    Crear Usuario
                  </button>
                  <div>
                    <Link to="/sign-in">
                      <span className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed">
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
  );
}

function ErrorMessage({ error, className, ...props }) {
  if (!error?.length) return null;

  return (
    <p
      className={`text-sm text-red-600 m-y-1 font-semibold px-4 ${className}`}
      {...props}
    >
      {error[0].toUpperCase() + error.slice(1)}
    </p>
  );
}
