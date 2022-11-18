import { Link } from "react-router-dom";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loadUserInfo} from '../../redux/actions/index'
import callsApi from '../../services'
import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';

export default function LogIn() {
    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //   });
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",   password : ""
    });
    const [response, setResponse] = useState({state: false, msg: ""})
    

    
    function handleChange(event) {
        setData({    
        ...data,
                [event.target.name]: event.target.value
            }) 
    }
     function handleSubmit(data) {
        try {
            callsApi.login(data).then(r => {
                if(r.data.user){
                    dispatch(loadUserInfo(r.data.user))
                    setResponse({state: true, msg: ""})
                    navigate("/")
                }
            }).catch(err =>{
                console.log(err.response.data.Error)
                let msg = err.response.data.Error
                console.log(msg)
                if(msg) setResponse({state: false, msg})
            })
            
        }
        catch(e) {
            console.log(e)
            
        }
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
                            <form  onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit(data)
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
                                />
                                    

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
                                        id="exampleFormControlInput26"
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
                                    {(!response.state && response.msg.length > 0) && <p className='px-2 m-2 text-red-700 bg-red-200 rounded-md'>{response.msg}</p>}
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