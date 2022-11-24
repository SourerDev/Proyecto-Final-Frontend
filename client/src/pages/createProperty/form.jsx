import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormCheckbox from "../../components/form-checkbox/FormCheckbox.jsx";
import FormInputNumber from "../../components/form-input-number/FormInputNumber.jsx";
import {postPorperty} from '../../redux/actions/index';
import { isValidForm } from "../../utils/isValidForm.js";
import { inputNumber, inputServices } from "../../utils/formInputs.js";
import AutocompleteSearch from "../../components/autocomplete-search/autocompleteSearch.jsx";
import { useEffect } from "react";


export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cities, citiesA } = useSelector(state => state);
  const [data, setData] = useState({
    modality: "",
    type: "",
    city: "",
    idCity: "",
    adressName: "",
    adressNumber: "",
    floors: "",
    enviroments: "",
    bathrooms: "",
    rooms: "",
    garage: "",
    area: "",
    antiquity: "",
    description: "",
    observation: "",
    price: "",
  });
  const [services, setServices] = useState({});
  const [files, setFiles] = useState({});
  const [fileName, setFileName] = useState({});
  const [arrFileNames, setArrFileNames] = useState([]);
  const [errs, setErrs] = useState({});
  
  function handleChange(event) {
    if (event.target.name === 'city') {
      const { name, value } = event.target;
      setData((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null
        };
      });
      setErrs(isValidForm({
        ...data,
        [name]: value,
        idCity: citiesA[value] ? citiesA[value].id : null
      }))
    }
    else {
      setData({
        ...data,
        [event.target.name]: event.target.value
      })
      setErrs(isValidForm({
        ...data,
        [event.target.name]: event.target.value
      }))
      
    }
  }
  
    function handleServices(event) {
      setServices({
        ...services,
        [event.target.name]: event.target.checked
      })
    }

    function onFileChange(e) {
      let file = e.target.files[0]
      if(["png", "jpg", "jpeg"].includes(file.type.split("/")[1]) && arrFileNames.length < 7) {
        console.log(e)
        file.value = e.target.value
        console.log(file)
        setFiles({
          ...files,
          [file.name] : file
        })
        setFileName({...fileName, [file.name]: file.name})
        setArrFileNames(Object.values({...fileName, [file.name]: file.name}))
      }
    }

    function onDeleteFile(e, name) {
      e.preventDefault()
      delete files[name]
      setFiles({...files})
      delete fileName[name]
      setFileName({...fileName})
      setArrFileNames(Object.values({...fileName}))
    } 
      
    useEffect(() => {
      console.log(files)
    },[files])
    
  return (<div className="flex flex-row  ">
    <div className="bg-blue-50 basis-1/2">
      <h4 className="sm-text-xl 2xl-text-3xl italic font-semibold text-center text-gray-900 dark:text-white">Rellene el siguiente formulario para publicar su propiedad</h4>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(postPorperty(data, services, files))
          navigate("/home")
        }}
      >
        <div className="xl px-48">
          <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="modality" onChange={(e) => handleChange(e)}>
            <option selected >Operación </option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select></div>
        {errs.modality && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.modality}</p>}
        <br />
        <div className="px-48">

          <select className="  sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="type" onChange={(e) => handleChange(e)}>
            <option selected value="">Tipo de propiedad </option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="PH">PH</option>
            <option value="Finca">Finca</option>
          </select></div>
        {errs.type && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.type}</p>}
        <br/>
        <div className="px-48">

          <AutocompleteSearch
            apiData={citiesA}
            city={data.city}
            stateHandleChange={handleChange}
          />
        </div>
        {errs.idCity && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.idCity}</p>}
        <br />

        <div className="flex flex-row px-2 justify-center">
          <div className='flex flex-col'>
              <div className="flex">
                <label htmlFor="adress" className=" px-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white">Dirección </label>
              </div>
              <div className='flex flex-row'>
                <div id="Direcion" className=" flex flex-col basis-1/2">
                  <input type="text" className=" sm:text-center form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="e.j Av. San Martin"
                    name="adressName" onChange={(e) => handleChange(e)}
                  />
                  {errs.adressName && <p className=" text-left px-6 mt-2 text-sm text-red-600 dark:text-red-500">{errs.adressName}</p>}
                </div>
                <div className="px-2 flex flex-col basis-1/2" id='numeroDePiso'>
                  <input type="number" className="sm:text-center form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    name="adressNumber" onChange={(e) => handleChange(e)} placeholder="numero..." 
                  />
                  {errs.adressNumber && <p className="text-left px-6  mt-2 text-sm text-red-600 dark:text-red-500">{errs.adressNumber}</p>}
                </div>
              </div>
          </div>
          {data.type === "Departamento" &&

            <>
              <div className="px-2">  
                <label className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white" htmlFor="dptoNumber">numero de piso</label>
                <input className="sm:text-center form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "  type="text" name="dptoNumber" placeholder="e.j tercero B" onChange={(e) => handleChange(e)} />
              </div>
            </>
          }
        </div>
        <br />
       
        
      <p className=" flex justify-center text-base italic font-semibold text-center text-gray-600">Imagenes de la propiedad (.JPG, .JPEG, .PNG)</p>
      <div className=" flex justify-center mt-4">
        <input 
          className="flex justify-center"
          type="file"
          name="images"
          id="images"
          onChange={onFileChange}
          />
          </div>
        {!arrFileNames.length ? <p className=" flex justify-center mt-2">Elija dos archivo</p> 
          : arrFileNames.map((name) => {
            return (
              <div className="flex justify-center my-2 px-2" key={name}>
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => onDeleteFile(e, name)}><svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
                <p className="px-2">{name}</p>
              </div>
            )
          })
        }
        
        {!arrFileNames.length && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">suba por lo menos una imagen</p>}
        <br />
      
        <p className="text-base italic font-semibold text-center text-gray-600 dark:text-white">A continuacion ingrese la cantidad en cada campo segun su propiedad</p>
        <br />
        {inputNumber.map(i =>
          <FormInputNumber
            handleChange={handleChange}
            value={i.value}
            inputName={i.inputName}
            err={errs[i.value]}
            key={i.value}
          />
        )}
        <br />

        <p className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white">Servicios</p>
        {inputServices.map(s =>
          <FormCheckbox
            handleChange={handleServices}
            value={s.value}
            inputName={s.inputName}
            key={s.value}
          />
        )}
        <br />

        <p className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white"> Breve descripcion  </p>
        <textarea className=" form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="text" name="description" onChange={(e) => handleChange(e)} />
        {errs.description && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.description}</p>}
        <br />

        <p className="text-base italic font-semibold text-center text-gray-600 dark:text-white">Observaciones (opcional)</p>
        <textarea className=" form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="text" name="observation" onChange={(e) => handleChange(e)} />
        <br />
        <p className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white">{`Por ultimo ingrese ${data.modality === 'Venta' ? 'presouesto' : 'precio mensual'} de la propiedad (en ARS)`}</p>

        <div className="xl:px-40 px.56 ">
          <input className="  form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none sm:text-center " type="number" name="price" onChange={(e) => handleChange(e)} />
        </div>
        {errs.price && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.price}</p>}
        <br />

        <input className="disabled:bg-gray-300 disabled:text-gray-700 disabled:border-gray-800 disabled:cursor-not-allowed flex mx-auto m-3 p-6 w-50 px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="submit"
          disabled={Object.keys(errs).length || !data.modality.length ? true : false}
        />

      </form>
    </div>
      
    <div class=" ">
                        <div class="  col-start-1 col-end-3 row-start-1 " >
                            <img src="https://i.pinimg.com/564x/52/fd/81/52fd81d9aaa47e6ff7d3f1daa0c5136a.jpg" alt="" class="w-full  h-full object-cover rounded-lg  " loading="lazy"></img>
                        </div>
                        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0">
                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900  dark:sm:text-black">{data.city}</h1>
                            <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900  dark:sm:text-black">
                                {data.adressName}  {data.adressNumber}
                                
                                </h1>
                            <p class="mt-1 text-lg font-semibold text-white sm:text-slate-900  dark:sm:text-black ">{data.modality}</p>
                        </div>
                        <dl class="mt-4 text-xs font-medium drop-shadow-2xl row-start-2  ">
                            <dl >

                                <dd class="text-blue-300 flex items-center dark:text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="text-xl">{data.price} <span class="text-blue-300 font-normal">(usd)</span></span>
                                </dd>
                            </dl>
                            <div className="grid bg-blue-50 items-center col-start-1 col-end-3 row-start-1 sm:mb-3 sm:grid-cols-2">
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>

                                    <span class="m-3 text-xl p-0">{data.floors} <spam></spam> <span class="text-black font-normal">(pisos)</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>


                                    <span class="m-3 text-xl p-0">{data.garage} <span class="text-black font-normal">(garage)</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center   dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>



                                    <span class="m-3 text-xl p-0">{data.enviroments} <span class="text-black font-normal">ambientes</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                    </svg>




                                    <span class="m-3 text-xl p-0">{data.area} <span class="text-black text-l">.mt2</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center  dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>



                                    <span class="m-3 text-xl p-0">{data.rooms} <span class="text-black font-normal">cuartos</span></span>


                                </dd>
                                <dd class="text-black m-3 p-1 flex items-center dark:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>




                                    <span class="m-3 text-xl p-0">{data.antiquity} </span><span class="text-black text-xl font-normal">antiguedad</span>
                                </dd>
                            </div>
                        </dl>
                        <p
                            class="mt-4 text-sm leading-6 col-start-1  dark:text-slate-400">
                         <h1 class="dark:text-black text-xl m-5"> Descripcion </h1>
                           {data.description}
                        </p>

    </div>

  </div>
  )
}