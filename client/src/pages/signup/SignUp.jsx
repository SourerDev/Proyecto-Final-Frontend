import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignUp } from '../../redux/actions/index';
import { isValidSingUp} from "../../utils/isValidSingUp";
import swal from 'sweetalert'


export default function SignUp() {

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "", userName: "", cellphone: "" , password : "", password2: "", 
    });
    
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
        <div className="h-[87vh]">
            
            <section className="h-full">

                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className=" hidden lg:flex grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
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
                                swal({
                                    title: "Exelente",
                                    text: "Usuario Creado!",
                                    icon: "success",
                                  })
                                navigate("/login")
                            }}>
                               
                                <div className="mb-6">
                                    <input
                                    name="email"
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput1"
                                        placeholder="correo electronico"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.email && <p className="text-red-600">{errs.email}</p>}
                                </div>

                                <div className="mb-6">
                                    <input
                                        name="userName"
                                        type="userName"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput3"
                                        placeholder="nombre de usuario"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.userName && <p className="text-red-600">{errs.userName}</p>}
                                </div>
                                <div className="mb-6">
                                    <input
                                        name="cellphone"
                                        type="number"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput3"
                                        placeholder="Telefono"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errs.cellphone && <p className="text-red-600">{errs.cellphone}</p>}
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
                                    {errs.password && <p className="text-red-600">{errs.password}</p>}
                                </div>
                                <div className="mb-6">
                                    <input
                                    name="password2"
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="FormControlInput56"
                                        placeholder="repita la contraseña"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                
                              


                                <div className="flex flex-col items-start text-center lg:text-left lg:h-20 grid lg:grid-cols-3 lg:gap-4 lg:content-center">
                                    <button
                                            disabled={!Object.keys(errs).length && data.email.length ? false : true}
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed"
                                       
                                       >
                                            Crear Usuario
                                        </button>
                                        <div>  <Link to="/login">
                                        <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed">Iniciar sesión</button>
                                           </Link>
                                     </div>
                                        
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}