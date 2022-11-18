import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from '../../redux/actions/index'
// import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";
export default function LogIn() {
    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //   });
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",   password : ""
    });
    console.log(data)
    // const [errs, setErrs] = useState({});


    
    function handleChange(event) {
        setData({    
        ...data,
                [event.target.name]: event.target.value
            }) 
          }
        
          useEffect(() => {
            
          }, [data])

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
            <section class="h-screen">

                <div class="px-6 h-full text-gray-800">
                    <div
                        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://img.freepik.com/vector-premium/registro-linea-o-registro-inicie-sesion-obtener-cuenta-aplicacion-telefono-inteligente-interfaz-usuario-aplicacion-movil-contrasena-segura-interfaz-usuario-banner-web-acceso-ilustracion-vector-gente-dibujos-animados_2175-1060.jpg?w=2000"
                                class="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form     onSubmit={(e) => {
                         e.preventDefault()
                         dispatch(postLogin(data))
                        }}>
                                <div class="flex flex-row items-center justify-center lg:justify-start">
                                    <p class="text-lg mb-0 mr-4">Iniciar sesion con:</p>
                                    <GoogleLogin
  onSuccess={credentialResponse => {
    
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
                                    <button 
                                    // onClick={() => login()}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        class="inline-block p-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">

                                        <svg viewBox="0 0 256 262" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="w-5 h-5">
                                            <g>
                                                <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"></path>
                                                <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"></path>
                                                <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"></path>
                                                <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"></path>
                                            </g>
                                        </svg>
                                        </button>;





                                </div>

                                <div
                                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>


                                <div class="mb-6">
                                    <input
                                    name="email"
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>


                                <div class="mb-6">
                                    <input
                                    name="password"
                                        type="password"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <div class="flex justify-between items-center mb-6">
                                    <div>
                                        <Link to="/signup">
                                        <button class=" inline-block text-gray-800"
                                        >Registrarme
                                        </button>
                                        </Link>
                                    </div>
                                    <a class="text-gray-800">Recuperar contraseña</a>
                                </div>

                                <div class="text-center lg:text-left">
                                    {/* <Link to="/"> */}
                                        <button
                                            type="submit"
                                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Iniciar sesion
                                        </button>
                                    {/* </Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}