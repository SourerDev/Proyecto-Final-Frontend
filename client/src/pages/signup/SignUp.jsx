import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignUp } from '../../redux/actions/index';
import { isValidSingUp} from "../../utils/isValidSingUp";
import { authentication } from "../../firebase/config/firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
 
} from "firebase/auth"


export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "", userName: "",  password : "", password2: "", 
    });
    console.log(data)
    const handleClickGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(provider)
          .then((result) => {
            
            console.log(result);
        
           
          })
          .catch((error) => {
            console.log(error);
          });
      };

     
    const [errs, setErrs] = useState({});
    function handleChange(event) {
        setData({    
            ...data,
            [event.target.name]: event.target.value
        })
        setErrs(isValidSingUp({    
            ...data,
            [event.target.name]: event.target.value
        })) 
    }
    
    
    return (
        <div>
            <div className="flex flex-row justify-between p-4 relative shadow">
                <div className="text-2xl font-bold sm:text-3xl sm:font-extrabold tracking-wide flex space-x-4">

                    <img
                        className="h-8 w-auto sm:h-12"
                        src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
                        alt=""
                    />
                    <h1 className="self-start md:flex justify-center">Properties & You</h1>

                </div>
                <nav className="space-x-10 lg:flex items-center  lg:basis-1/2">
                    <Link
                        to="/"
                        className=" text-base font-medium text-gray-500 hover:text-gray-900 "
                    >
                        INICIO
                    </Link>
                    <Link
                        to="/home"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        HOME
                    </Link>
                </nav>
            </div>
            
            <section className="h-screen">

                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form   
                                onSubmit={(e) => {
                                e.preventDefault()
                                dispatch(postSignUp(data))
                                alert("usuario creado con exito")
                                navigate("/login")
                            }}>
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="text-lg mb-0 mr-4">Registrarse con:</p>
                                    
                                        <button onClick={handleClickGoogle}>
                  <p>Google</p>
                </button>

                                        
                                </div>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>


                                <div className="mb-6">
                                    <input
                                    name="email"
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput1"
                                        placeholder="e-mail"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.email && <p>{errs.email}</p>}
                                </div>

                                <div class="mb-6">
                                    <input
                                        name="userName"
                                        type="userName"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput3"
                                        placeholder="nombre de usuario"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.userName && <p>{errs.userName}</p>}
                                </div>

                                <div className="mb-6">
                                    <input
                                    name="password"
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput2"
                                        placeholder="contraseña"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.password && <p>{errs.password}</p>}
                                </div>
                                <div class="mb-6">
                                    <input
                                    name="password2"
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput56"
                                        placeholder="repita la contraseña"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                
                                {/* <div class="mb-6">
                                    <input
                                        name="cellphone"
                                        type="cellphone"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput5"
                                        placeholder="cellphone"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div> */}


                                <div className="flex flex-col items-start text-center lg:text-left">
                                    <Link to="/login">
                                        <button className="px-2 py-1">Iniciar sesión</button>
                                    </Link>
                                    
                                        <button
                                            // disabled={!Object.keys(errs).length && data.email.length ? false : true}
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400"
                                        >
                                            Registrarme
                                        </button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}