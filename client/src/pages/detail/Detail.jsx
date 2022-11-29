import React from "react";
import { Link, useParams,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { contactOwner, getIdProperties, postComment, resetDetail } from "../../redux/actions/index";
import { useEffect, useState, useRef } from "react";
import { findNameCity } from "../../utils/autocompleteUtils";
import Question from "../../components/question/Question";
import CarrouselDetail from "../../components/carousel/CarrouselDetail"
import { saveIdInLocalStorage,saveInStorage,getOfStorage} from "../../utils/saveIdInLocalStorage";
import swal from 'sweetalert2'
import {mustBeLogged, successContact} from "../../sweetAlerts/sweetAlerts"

export default function Detail() {
    const refQuestion = useRef()
    let { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const payload = useSelector((state) => state.detail)
    const city = useSelector((state) => state.citiesA)
    const user = useSelector(state => state.user)
    const ciudad = findNameCity(city, payload?.idCity)
    const [comment, setComment] = useState("")
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        dispatch(getIdProperties(id))
        let save = getOfStorage('detail')
        if(save?.id?.length && save?.id === id) {
            setComment(save?.question)
            saveInStorage("detail",null,true)
        }
        return () => {
            dispatch(resetDetail())
        }
    }, [id])

    function commentSumbit(e) {
        e.preventDefault()
        const data = {
            id,
            id_User: user.id_User,
            questions: comment,
            answer: ""
        }
        console.log(data)
        dispatch(postComment(data))
        refQuestion.current.value = ""
        setComment("")
        setTimeout(() => {
            dispatch(getIdProperties(id))
        }, 500)
    }
    const data = []
    const userData = payload.User
    for(let i in userData){
      data.push(userData[i])
    }
    console.log(data)
   
    let images1 = [
        "https://static.tokkobroker.com/pictures/22195378878590399459749233039638765388563259893558223458366824765496290235011.jpg",
        "https://static.tokkobroker.com/pictures/62097336669621611912439568172754377674026387283592863525525020166865836476845.jpg",
        "https://static.tokkobroker.com/pictures/30641452628166825515595170899423142700348859149718156386875136195094220568629.jpg",
    ]
    return (
        <div className="bg-blue-50 px-4">
            <Link to="/home">
                <div className="px-4 my-4">
                    <button className=" whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        atras
                    </button>
                </div>
            </Link>
            
            {
                payload ? (

                    <div class="max-w-4xl m-1 p-2 mx-auto  grid grid-cols-1 lg:max-w-[97rem] lg:gap-x-20 lg:grid-cols-2">
                        <div class=" col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4  lg:col-start-2  lg:row-span-2  ">
                            <CarrouselDetail images={payload.images} />
                        </div>
                        <div class="relative my-0 shadow-2xl p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:bg-white sm:bg-white lg:row-start-1">
                            <h1 class="mt-1 my-2 flex justify-center text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black">{payload.address}</h1>
                            <h1 class="mt-1 text-lg flex justify-center font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black">
                                {
                                    ciudad


                                }</h1>
                            <p class="text-xl mt-2 leading-4 flex justify-center font-medium text-white sm:text-slate-400 dark:sm:text-slate-400"> {payload.type}</p>
                            <p class="text-xl mt-2 leading-4 flex justify-center font-medium text-white sm:text-indigo-600 dark:sm:text-indigo-600">{payload.modality}</p>

                        </div>
                        <dl class="mt-4 text-xs font-medium drop-shadow-2xl row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dl className="my-4 border-black border-2 rounded-lg shadow-2xl bg-white">

                                <dd class="flex justify-center  text-black  items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="text-2xl ">{payload.price} <span class="  font-normal">us</span></span>
                                </dd>
                            </dl>
                            <div className="shadow-2xl bg-white grid rounded-lg items-center col-start-1 col-end-3 row-start-1 sm:mb-3 sm:grid-cols-2">
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>

                                    <span class="m-3 text-xl p-0">{payload.floors} <spam></spam> <span class="text-black font-normal">(pisos)</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>


                                    <span class="m-3 text-xl p-0">{payload.garage} <span class="text-black font-normal">(garage)</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center   dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>



                                    <span class="m-3 text-xl p-0">{payload.environments} <span class="text-black font-normal">ambientes</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                    </svg>




                                    <span class="m-3 text-xl p-0">{payload.area} <span class="text-black text-l">.mt2</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>



                                    <span class="m-3 text-xl p-0">{payload.rooms} <span class="text-black font-normal">cuartos</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>




                                    <span class="m-3 text-xl p-0">{payload.antiquity} </span><span class="text-black text-xl font-normal">antiguedad</span>


                                </dd>


                            </div>
                        </dl>





                        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-4 dark:text-slate-400">
                            <article>
                                <div className="px-4 my-10 shadow-2xl bg-white rounded-lg">
                                    <h1 class="dark:text-black underline text-2xl  m-5"> Descripción </h1>
                                    <p className="text-xl my-4">{payload.description}</p>
                                </div>
                                <div className="px-4 my-10 shadow-2xl bg-white rounded-lg">
                                    <h1 class="dark:text-black  text-2xl underline m-5"> Servicios </h1>
                                    {
                                        payload.services ? payload.services.map((el) =>{
                                            return (
                                                <div className=" flex justify-between ">
                                                    <ul className="flex justify-between my-4 m-3 text-xl ">
                                                    <svg className="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                        {el}
                                                    </ul>
                                                </div>
                                            )
                                        })
                                        : <p> El propietario no cargó servicios </p>
                                    }
                                </div>
                                <div class=" flex  flex-auto mb-4 space-x-7">

                                    <img class="w-10 h-10 rounded-full " src={data[2]} alt=""></img>
                                   
                                    <div class="space-y-1 font-medium flex-col dark:text-black">
                                       
                                     <p className="text-xl  flex items-center">{data[3]}</p>
                                     
                                     <p className=" flex justify-between  "><svg class="w-6 h-6  text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                     </svg>Validado por Properties & You  </p>
                                    
                                   
                                    
                                       
                                     </div>

                                        <div className="px-4">
                                            <button 
                                                //cambiar estilos del disabled
                                                disabled={disabled}
                                                onClick={() => {
                                                    //condicional de usuario
                                                    if(!user?.user_type || user.user_type === "userNotLogged"){
                                                        swal.fire(mustBeLogged("Debes Iniciar Sesión","Para poder contactar primero debes iniciar sesión")).then(result=>{
                                                            if (result.isConfirmed) {
                                                                //saveIdInLocalStorage(id,true)
                                                                saveInStorage("detail", {id, question: comment})
                                                                navigate('/login')
                                                            }
                                                        })
                                                    }
                                                    else {
                                                        dispatch(contactOwner(user.id_User, id))
                                                        swal.fire(successContact())
                                                        setDisabled(true)
                                                    }
                                                }}
                                                className="  flex flex-col py-2.5 whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                                Contactar al vendedor
                                            </button>
                                        </div>
                                       
                                        
                                    
                                </div>
                            </article>

                            <form onSubmit={(e) => {
                                //condicional de usuario
                                if(!user?.user_type || user.user_type === "userNotLogged"){
                                    e.preventDefault()
                                    swal.fire(mustBeLogged("Debes Iniciar Sesión","Para poder realizar una pregunta primero debes iniciar sesión")).then(result=>{
                                        if (result.isConfirmed) {
                                            //saveIdInLocalStorage(id,true)
                                            saveInStorage("detail", {id, question: comment})
                                            navigate('/login')
                                        }
                                    })
                                }
                                else {
                                    commentSumbit(e)
                                }
                            }}>
                                <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                    <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="comment" className="text-xl m-5">Preguntarle al publicador</label>
                                        <textarea 
                                            ref={refQuestion} 
                                            onChange={(e) => setComment(e.target.value)} 
                                            name="comment" rows="4" 
                                            value={comment}
                                            class="rounded px-0 w-full  text-sm text-gray-900 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 " 
                                            placeholder=" Escriba aquí su pregunta..." ></textarea>
                                            
                                    </div>
                                    <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                        <input
                                            value="Preguntar"
                                            disabled={comment.length ? false : true}
                                            type="submit"
                                            class="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        />
                                        <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
                                            Cumpla con nuestras políticas sobre el uso indebido del vocabulario.
                                            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Properties & you</a>.
                                        </p>
                                    </div>
                                </div>
                                {payload.Feedbacks?.length ? (
                                    <div>
                                        <h4 className="text-2xl underline ">Otros usuarios preguntaron:</h4>
                                        {payload.Feedbacks?.map(f => <Question question={f.questions} answer={f.answer} />)}
                                    </div>
                                ) : null}

                            </form>

                        </p>
                    </div>




                ) :
                    <div>
                        <p> Propiedad inexistente</p>
                    </div>
            }
        </div>
    )
}