import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormCheckbox from "../../components/form-checkbox/FormCheckbox.jsx";
import FormInputNumber from "../../components/form-input-number/FormInputNumber.jsx";
import { postPorperty } from '../../redux/actions/index';
import { isValidForm } from "../../utils/isValidForm.js";
import { inputNumber, inputServices } from "../../utils/formInputs.js";
import AutocompleteSearch from "../../components/autocomplete-search/autocompleteSearch.jsx";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cities, citiesA } = useSelector(state => state);
  const [data, setData] = useState({
    modality: "",
    type: "",
    city: "",
    idCity: null,
    adressName: "",
    adressNumber: "",
    images: "",
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
  const [services, setServices] = useState({})
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

  useEffect(() => {
    console.log(data)
    console.log(errs)
  }, [data, errs])
  return (<div className="flex flex-row  ">
    <div className="bg-blue-50 basis-1/2">
      <h4 className="sm-text-xl 2xl-text-3xl italic font-semibold text-center text-gray-900 dark:text-white">Rellene el siguiente formulario para publicar su propiedad</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(postPorperty(data, services))
          navigate("/redirect")
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
        <br />
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

        <label htmlFor="images" className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white" >Imagen de la propiedad </label>
        <input type="text" className="sm:text-center
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " name="images" onChange={(e) => handleChange(e)} placeholder="ingrese link de la img..." />
        {errs.images && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{errs.images}</p>}
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
     
    <div className="flex flex-col items-center justify-around hover:auto-cols-min gap-4 basis-1/2">
      <div className="mb-4">
        <img src="https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="max-w-xs h-auto rounded-lg" alt="" />
      </div>
      <div className="mb-4">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" className="max-w-xs h-auto rounded-lg" alt="" />
      </div>
      <div className="mb-4">
        <img src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="max-w-xs h-auto rounded-full" alt="" />
      </div>
      <div className="mb-7">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="max-w-xs h-auto rounded-full" alt="" />
      </div>
    </div>

  </div>
  )
}