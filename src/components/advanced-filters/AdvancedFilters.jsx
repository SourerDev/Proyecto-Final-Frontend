import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchCityInput } from '../form/inputs/SearchCityInput.jsx'
import { filter } from '../../utils/filters.js'
import {
  filterProperties,
  resetFilters,
  filterNormal,
} from '../../redux/actions/index.js'
import { useEffect } from 'react'

export default function AdvancedFilters({ setModalOn }) {
  const dispatch = useDispatch()
  const { properties, citiesA, filteredProperties } = useSelector(
    (state) => state
  )
  const {
    operation,
    propertyType,
    city,
    rooms,
    bathrooms,
    idCity,
    floors,
    environments,
    garage,
    antiquity,
    area,
    price,
  } = useSelector((state) => state.filters)

  const [state, setState] = useState({
    operation: '',
    propertyType: '',
    city: '',
    idCity: null,
    rooms: 0,
    bathrooms: 0,
    floors: '',
    environments: '',
    garage: '',
    antiquity: { min: null, max: null },
    area: { min: null, max: null },
    price: { min: null, max: null },
  })

  const handleCancelClick = () => {
    setModalOn(false)
  }

  const stateHandleChange = (evt) => {
    const { name, value } = evt.target
    const [nameA, nameB] = name.split('-')

    if (nameA === 'price' || nameA === 'antiquity' || nameA === 'area') {
      setState((previus) => {
        return {
          ...previus,
          [nameA]: {
            ...previus[nameA],
            [nameB]: value,
          },
        }
      })
    } else if (name === 'city') {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null,
        }
      })
    } else {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
        }
      })
    }
  }
  const refPrecioMin = useRef()
  const refPrecioMax = useRef()
  const refOperation = useRef()
  const refType = useRef()
  const refEnviroments = useRef()
  const refFloors = useRef()
  const refRooms = useRef()
  const refBathrooms = useRef()
  const refGarage = useRef()
  const refAreaMin = useRef()
  const refAreMax = useRef()
  const refAntiquityMin = useRef()
  const refAntiquityMax = useRef()
  const refCity = useRef()

  function reset(arr) {
    const resetAll = {
      operation: '',
      propertyType: '',
      city: '',
      idCity: null,
      rooms: 0,
      bathrooms: 0,
      floors: '',
      environments: '',
      garage: '',
      antiquity: { min: null, max: null },
      area: { min: null, max: null },
      price: { min: null, max: null },
    }
    setState(resetAll)
    arr.forEach((ref) => {
      let element = ref.current
      element.value = ''
    })
    dispatch(filterNormal(resetAll))
    return dispatch(resetFilters())
  }

  useEffect(() => {
    if (
      operation ||
      propertyType ||
      city ||
      rooms ||
      bathrooms ||
      idCity ||
      floors ||
      environments ||
      garage ||
      antiquity ||
      area ||
      price
    ) {
      setState((previus) => {
        return {
          ...previus,
          operation: operation,
          propertyType: propertyType,
          city: city,
          idCity: idCity,
          rooms,
          bathrooms,
          environments,
          floors,
          garage,
          antiquity,
          area,
          price,
        }
      })
    }
  }, [])

  return (
    <>
      <div className=" flex justify-center ">
        <button
          className="m-2 rounded-full bg-blue-500 p-2"
          onClick={() => {
            dispatch(filterProperties(filter(properties, state)))
            dispatch(filterNormal(state))
            handleCancelClick()
          }}
        >
          Aplicar filtros
        </button>
        <button
          className="m-2  rounded-full bg-blue-500 p-2"
          onClick={() => {
            dispatch(resetFilters())
            reset([
              refPrecioMin,
              refPrecioMax,
              refOperation,
              refType,
              refEnviroments,
              refFloors,
              refRooms,
              refBathrooms,
              refGarage,
              refAreaMin,
              refAreMax,
              refAntiquityMin,
              refAntiquityMax,
              refCity,
            ])
            handleCancelClick()
          }}
        >
          Limpiar filtros
        </button>
      </div>
      <div className=" h-full ">
        <div>
          <br />
          <div className=" flex  h-0 flex-col p-2 pb-20">
            <label
              className="sm-text-xl 2xl-text-3xl text-center font-semibold italic text-gray-900 dark:text-white"
              htmlFor="price"
            >
              Precio
            </label>
            <div className="slice-y-2 mb-5 flex h-10">
              <input
                ref={refPrecioMin}
                className="form-control border-gray-30
        m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="minPrice"
                value={state.price.min}
                onChange={stateHandleChange}
                name="price-min"
                placeholder="Desde"
              />
              <p>_</p>
              <input
                ref={refPrecioMax}
                className="form-control border-gray-30
        m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="maxPrice"
                value={state.price.max}
                onChange={stateHandleChange}
                name="price-max"
                placeholder="Hasta"
              />
            </div>
          </div>
          <br />
          <div className=" h-9 px-2 ">
            <select
              ref={refOperation}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pb-6 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="operation"
              onChange={stateHandleChange}
              value={state.operation}
            >
              <option value="" disabled hidden>
                Operación
              </option>
              <option value="Venta">Comprar</option>
              <option value="Alquiler">Alquilar</option>
            </select>
          </div>{' '}
          <br />
          <div className="px-2">
            <select
              ref={refType}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="propertyType"
              onChange={stateHandleChange}
              value={state.propertyType}
            >
              <option value="" selected>
                Tipo de propiedad
              </option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="PH">PH</option>
              <option value="Finca">Finca</option>
            </select>
          </div>{' '}
          <br />
          <div className=" flex justify-center px-2 ">
            <SearchCityInput
              refCity={refCity}
              apiData={citiesA}
              city={state.city}
              stateHandleChange={stateHandleChange}
            />
          </div>{' '}
          <br />
          <div className="h-5 px-2">
            <select
              ref={refEnviroments}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="environments"
              onChange={stateHandleChange}
              value={state.environments}
            >
              <option value="">cantidad de ambientes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>{' '}
          <br />
          <div className="h-5 px-2">
            <select
              ref={refFloors}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="floors"
              onChange={stateHandleChange}
            >
              <option value="">cantidad de pisos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div className="h-5 px-2">
            <select
              ref={refRooms}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="rooms"
              onChange={stateHandleChange}
            >
              <option value="">cantidad de cuartos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div className="h-5 px-2">
            <select
              ref={refBathrooms}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="bathrooms"
              onChange={stateHandleChange}
            >
              <option value="">cantidad de baños</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div className="h-5 px-2">
            <select
              ref={refGarage}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="garage"
              onChange={stateHandleChange}
            >
              <option value="">cantidad de cocheras</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <br />
          <div className=" flex h-11 flex-col p-2 px-2">
            <label
              className="sm-text-xl 2xl-text-3xl text-center font-semibold italic text-gray-900 dark:text-white"
              htmlFor="area"
            >
              Area (en metros²)
            </label>
            <div className="slice-y-2 flex">
              <input
                ref={refAreaMin}
                className=" form-control border-gray-30
        m-0 block   w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="minArea"
                value={state.area.min}
                onChange={stateHandleChange}
                name="area-min"
                placeholder="Desde"
              />
              <p>_</p>
              <input
                ref={refAreMax}
                className="form-control border-gray-30
        m-0 block   w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="maxArea"
                value={state.area.max}
                onChange={stateHandleChange}
                name="area-max"
                placeholder="Hasta"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-col p-2">
            <label
              className="sm-text-xl 2xl-text-3xl text-center font-semibold italic text-gray-900 dark:text-white"
              htmlFor="price"
            >
              Antiguedad (en años)
            </label>
            <div className="slice-y-2 flex">
              <input
                ref={refAntiquityMin}
                className="form-control border-gray-30
        m-0 block   w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="minAntiquity"
                value={state.antiquity.min}
                onChange={stateHandleChange}
                name="antiquity-min"
                placeholder="Desde"
              />
              <p>_</p>
              <input
                ref={refAntiquityMax}
                className="form-control border-gray-30 m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="maxAntiquity"
                value={state.antiquity.max}
                onChange={stateHandleChange}
                name="antiquity-max"
                placeholder="Hasta"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
