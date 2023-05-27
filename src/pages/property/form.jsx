import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormCheckbox from '../../components/form-checkbox/FormCheckbox.jsx'
import FormInputNumber from '../../components/form-input-number/FormInputNumber.jsx'
import { isValidForm } from '../../utils/isValidForm.js'
import { inputNumber, inputServices } from '../../utils/formInputs.js'
import AutocompleteSearch from '../../components/autocomplete-search/autocompleteSearch.jsx'
import { useEffect } from 'react'
import Loading from '../../components/loading/Loading.jsx'
import { getDataForm } from '../../utils/postingProperty.js'
import swal from 'sweetalert2'
import { createPropertyAlert } from '../../sweetAlerts/sweetAlerts.js'
import callsApi from '../../services/index.js'

export default function Form() {
  const navigate = useNavigate()
  const { cities, citiesA, user } = useSelector((state) => state)
  const [data, setData] = useState({
    modality: '',
    type: '',
    city: '',
    idCity: '',
    adressName: '',
    adressNumber: '',
    floors: '',
    enviroments: '',
    bathrooms: '',
    rooms: '',
    garage: '',
    area: '',
    antiquity: '',
    description: '',
    observation: '',
    price: '',
  })
  const [services, setServices] = useState({})
  const [files, setFiles] = useState({})
  const [fileName, setFileName] = useState({})
  const [arrFileNames, setArrFileNames] = useState([])
  const [errs, setErrs] = useState({})
  const [loader, setLoader] = useState(false)

  function handleChange(event) {
    if (event.target.name === 'city') {
      const { name, value } = event.target
      setData((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null,
        }
      })
      setErrs(
        isValidForm({
          ...data,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null,
        })
      )
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      })
      setErrs(
        isValidForm({
          ...data,
          [event.target.name]: event.target.value,
        })
      )
    }
  }

  function handleServices(event) {
    setServices({
      ...services,
      [event.target.name]: event.target.checked,
    })
  }

  function onFileChange(e) {
    let file = e.target.files[0]
    if (
      ['png', 'jpg', 'jpeg'].includes(file.type.split('/')[1]) &&
      arrFileNames.length < 7
    ) {
      file.value = e.target.value

      setFiles({
        ...files,
        [file.name]: file,
      })
      setFileName({ ...fileName, [file.name]: file.name })
      setArrFileNames(Object.values({ ...fileName, [file.name]: file.name }))
    }
  }

  function onDeleteFile(e, name) {
    e.preventDefault()
    delete files[name]
    setFiles({ ...files })
    delete fileName[name]
    setFileName({ ...fileName })
    setArrFileNames(Object.values({ ...fileName }))
  }

  useEffect(() => {}, [files])

  return (
    <div className="mt-0  flex flex-col bg-blue-50 px-2 sm:flex-row md:flex-row lg:flex-row">
      <div className="bg-blue-50  ">
        <h4 className="sm-text-xl 2xl-text-3xl mb-3 text-center font-semibold italic text-gray-900 dark:text-white">
          Rellene el siguiente formulario para publicar su propiedad
        </h4>
        <form
          className="w-full"
          encType="multipart/form-data"
          onSubmit={async (e) => {
            e.preventDefault()
            //loader true
            setLoader(true)

            getDataForm(data, services, files, user?.id_User).then((res) => {
              callsApi.postPorperty(res).then((res) => {
                setLoader(false)
                swal
                  .fire(createPropertyAlert())
                  .then((res) => navigate('/home'))
              })
            })
          }}
        >
          <div className=" flex justify-center ">
            <select
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="modality"
              onChange={(e) => handleChange(e)}
            >
              <option selected>Operación </option>
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>
          </div>
          {errs.modality && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              {errs.modality}
            </p>
          )}
          <br />
          <div className=" flex justify-center">
            <select
              className="  block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="type"
              onChange={(e) => handleChange(e)}
            >
              <option selected value="">
                Tipo de propiedad{' '}
              </option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="PH">PH</option>
              <option value="Finca">Finca</option>
            </select>
          </div>
          {errs.type && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              {errs.type}
            </p>
          )}
          <br />
          <div className=" px-4 ">
            <AutocompleteSearch
              apiData={citiesA}
              city={data.city}
              stateHandleChange={handleChange}
            />
          </div>
          {errs.idCity && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              {errs.idCity}
            </p>
          )}
          <br />

          <div className="flex flex-row justify-center px-2">
            <div className="flex flex-col">
              <div className="flex">
                <label
                  htmlFor="adress"
                  className=" block px-4 text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                >
                  Dirección{' '}
                </label>
              </div>
              <div className="flex flex-row">
                <div id="Direcion" className=" flex basis-1/2 flex-col">
                  <input
                    type="text"
                    className=" form-control border-gray-30 m-0  block rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                    placeholder="e.j Av. San Martin"
                    name="adressName"
                    onChange={(e) => handleChange(e)}
                  />
                  {errs.adressName && (
                    <p className=" mt-2 px-6 text-left text-sm text-red-600 dark:text-red-500">
                      {errs.adressName}
                    </p>
                  )}
                </div>
                <div className="flex basis-1/2 flex-col px-2" id="numeroDePiso">
                  <input
                    type="number"
                    className="form-control border-gray-30 m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                    name="adressNumber"
                    onChange={(e) => handleChange(e)}
                    placeholder="numero..."
                  />
                  {errs.adressNumber && (
                    <p className="mt-2 px-6  text-left text-sm text-red-600 dark:text-red-500">
                      {errs.adressNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {data.type === 'Departamento' && (
              <>
                <div className="px-2">
                  <label
                    className=" block text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                    htmlFor="dptoNumber"
                  >
                    numero de piso
                  </label>
                  <input
                    className="form-control border-gray-30 m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                    type="text"
                    name="dptoNumber"
                    placeholder="e.j tercero B"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </>
            )}
          </div>
          <br />

          <p className=" flex justify-center text-center text-base font-semibold italic text-gray-600">
            Imagenes de la propiedad (.JPG, .JPEG, .PNG)
          </p>
          <div className=" mt-4 flex flex-col justify-center  lg:flex">
            <input
              className=" pl-36 text-transparent sm:pl-72 md:pl-72  lg:pl-72"
              type="file"
              name="images"
              id="images"
              onChange={onFileChange}
            />
          </div>
          {!arrFileNames.length ? (
            <p className=" mt-2 flex justify-center">Elija dos archivo</p>
          ) : (
            arrFileNames.map((name) => {
              return (
                <div className="my-2 flex justify-center px-2" key={name}>
                  <button
                    className="mr-2 inline-flex items-center rounded-lg bg-blue-700 p-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700"
                    onClick={(e) => onDeleteFile(e, name)}
                  >
                    <svg
                      className="h-2 w-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <p className="px-2">{name}</p>
                </div>
              )
            })
          )}

          {!arrFileNames.length && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              suba por lo menos una imagen
            </p>
          )}
          <br />

          <p className="text-center text-base font-semibold italic text-gray-600 dark:text-white">
            A continuacion ingrese la cantidad en cada campo segun su propiedad
          </p>
          <br />
          {inputNumber.map((i) => (
            <FormInputNumber
              className=""
              handleChange={handleChange}
              value={i.value}
              inputName={i.inputName}
              err={errs[i.value]}
              key={i.value}
            />
          ))}
          <br />

          <p className=" block text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
            Servicios
          </p>
          {inputServices.map((s) => (
            <FormCheckbox
              handleChange={handleServices}
              value={s.value}
              inputName={s.inputName}
              key={s.value}
            />
          ))}
          <br />

          <p className=" block  text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
            {' '}
            Breve descripcion{' '}
          </p>
          <textarea
            className=" form-control border-gray-30 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-4  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out   focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none "
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          {errs.description && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              {errs.description}
            </p>
          )}
          <br />

          <p className="text-center text-base font-semibold italic text-gray-600 dark:text-white">
            Observaciones (opcional)
          </p>
          <textarea
            className=" form-control border-gray-30 m-0  block w-full rounded  border  border-solid  bg-white bg-clip-padding  px-3 py-1.5 text-base  font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none "
            type="text"
            name="observation"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <p className=" block text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">{`Por ultimo ingrese ${
            data.modality === 'Venta' ? 'presouesto' : 'precio mensual'
          } de la propiedad (en ARS)`}</p>

          <div className="px.56 xl:px-40 ">
            <input
              className="  form-control border-gray-30 m-0  block w-full rounded  border  border-solid  bg-white bg-clip-padding  px-3 py-1.5 text-base  font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
              type="number"
              name="price"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errs.price && (
            <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
              {errs.price}
            </p>
          )}
          <br />

          <input
            className="w-50  m-3 mx-auto flex rounded border-2 border-blue-600 p-6 px-3 py-1 text-xs font-medium uppercase leading-normal text-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:border-gray-800 disabled:bg-gray-300 disabled:text-gray-700 hover:bg-black hover:bg-opacity-5"
            type="submit"
            disabled={
              Object.keys(errs).length || !data.modality.length ? true : false
            }
          />
        </form>
      </div>

      <div className="mt-1 w-full bg-blue-50 lg:px-3">
        <div className="bg mb-3 rounded-lg bg-indigo-400">
          <h3 className="flex justify-center text-xl">
            Previsualización de la publicación{' '}
          </h3>
        </div>
        <div className=" flex flex-col lg:col-start-1 lg:col-end-3 lg:row-start-1 ">
          <img
            src="https://i.pinimg.com/564x/52/fd/81/52fd81d9aaa47e6ff7d3f1daa0c5136a.jpg"
            alt=""
            className="h-full  w-full rounded-lg object-cover  "
            loading="lazy"
          ></img>
        </div>
        <div className="relative col-start-1 row-start-1 mt-4 flex flex-col-reverse rounded-lg bg-white p-3 shadow-2xl ">
          <h1 className="mt-1 text-lg font-semibold text-black">{data.city}</h1>
          <h1 className="mt-1 text-lg font-semibold text-black ">
            {data.adressName} {data.adressNumber}
          </h1>
          <p className="mt-1 text-lg font-semibold text-black ">
            {data.modality}
          </p>
        </div>
        <dl className="row-start-2 mt-4 text-xs font-medium drop-shadow-2xl  ">
          <dl className="flex justify-center">
            <dd className="flex items-center text-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-xl">
                {data.price} <span className="font-normal text-black">usd</span>
              </span>
            </dd>
          </dl>
          <div className="col-start-1  col-end-3 row-start-1 grid items-center rounded-lg bg-white shadow-2xl sm:mb-3 sm:grid-cols-2">
            <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>

              <span className="m-3 p-0 text-xl">
                {data.floors} <spam></spam>{' '}
                <span className="font-normal text-black">(pisos)</span>
              </span>
            </dd>
            <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <span className="m-3 p-0 text-xl">
                {data.garage}{' '}
                <span className="font-normal text-black">(garage)</span>
              </span>
            </dd>
            <dd className="m-3 flex items-center p-1 text-black   dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span className="m-3 p-0 text-xl">
                {data.enviroments}{' '}
                <span className="font-normal text-black">ambientes</span>
              </span>
            </dd>
            <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>

              <span className="m-3 p-0 text-xl">
                {data.area} <span className="text-l text-black">.mt2</span>
              </span>
            </dd>
            <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span className="m-3 p-0 text-xl">
                {data.rooms}{' '}
                <span className="font-normal text-black">cuartos</span>
              </span>
            </dd>
            <dd className="m-3 flex items-center p-1 text-black dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="m-3 p-0 text-xl">{data.antiquity} </span>
              <span className="text-xl font-normal text-black">antiguedad</span>
            </dd>
          </div>
        </dl>
        <div className="my-10 rounded-lg bg-white px-4 shadow-2xl">
          <h1 className="m-5 text-2xl underline  dark:text-black">
            {' '}
            Descripción{' '}
          </h1>
          <p className="my-4 text-xl">{data.description}</p>
        </div>
      </div>
      {loader && (
        <div
          className="opacity-1 fixed top-0 z-50 h-screen w-full"
          onClick={() => {}}
        >
          <Loading />
        </div>
      )}
    </div>
  )
}
