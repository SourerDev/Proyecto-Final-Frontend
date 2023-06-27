import { useState, useRef, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Select } from '../form/selects/Select'
import { SearchCityInput } from '../form/inputs/SearchCityInput'
import { RangeSlider } from '../form/inputs/RangeSlider'
import { RangeInputNumber } from '../form/inputs/RangeInputNumber'
import { actionsApp, actionsPublications } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { Alerts } from '../../utils'

export function AdvancedFilters({ scrollY }) {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.app)
  const { byPublication, byProperty, byCity } = filters
  const [city, setCity] = useState(filters.byCity)

  const [dataFilters, setdataFilters] = useState({
    byPublication,
    byProperty,
  })

  useEffect(() => {
    console.log(dataFilters)
    console.log(city)
  }, [dataFilters, city])

  function handleFilters({ target }) {
    const strs = target.name.split('-')
    const nested = { ...dataFilters[strs[0]] }
    if (target.value === 'default') {
      nested[strs[1]] = ''
      setdataFilters({
        ...dataFilters,
        [strs[0]]: nested,
      })
    } else {
      nested[strs[1]] = target.value
      setdataFilters({
        ...dataFilters,
        [strs[0]]: nested,
      })
    }
  }

  function handleRangeNumbers(inputName, obj) {
    const strs = inputName.split('-')
    const nested = { ...dataFilters[strs[0]] }
    nested[strs[1]] = obj
    setdataFilters({
      ...dataFilters,
      [strs[0]]: nested,
    })
  }

  return (
    <div className="top-25 fixed right-4">
      <Popover className="relative border-2 border-red-500 p-2">
        <Popover.Button className="border-2 border-green-600">F</Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute right-0.5 w-[63vh]">
            <form
              className="flex flex-col items-center border-2 border-violet-700 p-10"
              onSubmit={(e) => {
                e.preventDefault()
                dispatch(actionsApp.setFilters(dataFilters))
                //loader
                ApiPropYou.getFilteredPublications(dataFilters).then(
                  ({ data }) => {
                    dispatch(
                      actionsPublications.setPublications(data.publications)
                    )
                    if (data?.info.error)
                      Alerts.smallError({ text: `${data.info.error}` })
                  }
                )
              }}
            >
              <Select
                className="w-1/2 border-2 border-black"
                selectName="byPublication-modality"
                options={modalityOpts}
                onChange={handleFilters}
              />

              <Select
                className="w-1/2 border-2 border-black"
                selectName="byProperty-type"
                options={typeOpts}
                onChange={handleFilters}
              />

              <SearchCityInput
                className="w-1/2"
                city={city}
                scrollY={scrollY}
                setCity={setCity}
                scrollIn={0}
                setFilterButton={() => {}}
              />
              <RangeSlider
                className="border-2 border-black"
                min={1}
                max={10}
                name="cuartos"
                inputName="byProperty-bedrooms"
                handleFilters={handleFilters}
              />
              <RangeSlider
                className="border-2 border-black"
                min={1}
                max={10}
                name="Baños"
                inputName="byProperty-bathrooms"
                handleFilters={handleFilters}
              />

              <RangeSlider
                className="b border-2 border-black"
                min={1}
                max={10}
                name="Fue construida a partir de:"
                inputName="byProperty-yearBuilt"
                handleFilters={handleFilters}
              />

              <RangeInputNumber
                className="border-2 border-black"
                min={10}
                max={50}
                name="Precio"
                inputName="byPublication-price"
                handleRangeNumbers={handleRangeNumbers}
              />
              <RangeInputNumber
                className="border-2 border-black"
                min={200}
                max={10000}
                name="Area (en mts²)"
                inputName="byProperty-squareMeters"
                handleRangeNumbers={handleRangeNumbers}
              />
              <button className="w-1/2 border-2 border-black" type="submit">
                Aplicar filtros
              </button>
            </form>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
const modalityOpts = [
  { name: 'Operación', value: 'default' },
  { name: 'Comprar', value: 'sale' },
  { name: 'Alquilar', value: 'rental' },
]
const typeOpts = [
  { name: 'Tipo de propiedad', value: 'default' },
  { name: 'Casa', value: 'house' },
  { name: 'Ph', value: 'ph' },
  { name: 'Departamento', value: 'apartment' },
  { name: 'Quinta', value: 'ranch' },
]

/* export default function AdvanceddFilters({ setModalOn }) {
  const dispatch = useDispatch()
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
  } = {
    operation: null,
    propertyType: null,
    city: null,
    rooms: null,
    bathrooms: null,
    idCity: null,
    floors: null,
    environments: null,
    garage: null,
    antiquity: null,
    area: null,
    price: null,
  }

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

  /* const null = (evt) => {
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
    //dispatch(filterNormal(resetAll))
    return //dispatch(resetFilters())
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
            //dispatch(filterProperties(filter(properties, state)))
            //dispatch(filterNormal(state))
            handleCancelClick()
          }}
        >
          Aplicar filtros
        </button>
        <button
          className="m-2  rounded-full bg-blue-500 p-2"
          onClick={() => {
            //dispatch(resetFilters())
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
                onChange={null}
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
                onChange={null}
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
              onChange={null}
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
              onChange={null}
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
              null={null}
            />
          </div>{' '}
          <br />
          <div className="h-5 px-2">
            <select
              ref={refEnviroments}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-center"
              name="environments"
              onChange={null}
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
              onChange={null}
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
              onChange={null}
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
              onChange={null}
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
              onChange={null}
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
                onChange={null}
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
                onChange={null}
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
                onChange={null}
                name="antiquity-min"
                placeholder="Desde"
              />
              <p>_</p>
              <input
                ref={refAntiquityMax}
                className="form-control border-gray-30 m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
                id="maxAntiquity"
                value={state.antiquity.max}
                onChange={null}
                name="antiquity-max"
                placeholder="Hasta"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} */
