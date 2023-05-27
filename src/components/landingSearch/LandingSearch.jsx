import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filter } from '../../utils/filters.js'
import { filterProperties, filterNormal } from '../../redux/actions/index'
import AutocompleteSearch from '../autocomplete-search/autocompleteSearch'

//logica de filtrado

export default function LandingSearch({ clicked }) {
  const dispatch = useDispatch()
  const { properties, citiesA } = useSelector((state) => state)
  const { operation, propertyType, city, idCity } = useSelector(
    (state) => state.filters
  )

  const [state, setState] = useState({
    operation: '',
    propertyType: '',
    city: '',
    idCity: null,
  })

  const stateHandleChange = (evt) => {
    const { name, value } = evt.target
    if (name === 'city') {
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

  const applyFilters = () => {
    if (state.operation || state.propertyType || state.idCity) {
      dispatch(filterProperties(filter(properties, state)))
      dispatch(filterNormal(state))
    }
  }

  useEffect(() => {
    setState((previus) => {
      return {
        ...previus,
        operation: operation,
        propertyType: propertyType,
        city: city,
        idCity: idCity,
      }
    })
  }, [operation, propertyType, city, idCity])

  return (
    <div className="flex w-full flex-col  space-y-2 rounded bg-slate-900/70 p-2 backdrop-blur-sm lg:p-6 xl:flex-row xl:space-y-0 ">
      <div className="flex w-full flex-col  space-y-2 p-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:px-2 xl:w-4/5 ">
        <div className="flex w-full flex-1 space-x-2">
          <select
            className="flex-1 rounded border-blue-900 p-2 shadow-sm outline-none focus:border-b-2"
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

          <select
            className="flex-1 rounded border-blue-900 p-2 shadow-sm outline-none focus:border-b-2"
            name="propertyType"
            onChange={stateHandleChange}
            value={state.propertyType}
          >
            <option value="" disabled hidden>
              Tipo de propiedad
            </option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="PH">PH</option>
            <option value="Finca">Finca</option>
          </select>
        </div>

        <div className="flex-1 overflow-hidden rounded">
          <AutocompleteSearch
            apiData={citiesA}
            city={state.city}
            stateHandleChange={stateHandleChange}
          />
        </div>
      </div>
      {clicked ? (
        <div className="flex space-x-2 px-1 py-1 sm:justify-center xl:w-1/4">
          <Link to="/home" className="w-1/2 sm:w-1/4 xl:w-2/5">
            <button
              className="group h-full w-full rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-2 text-lg font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white dark:focus:ring-cyan-800"
              disabled={citiesA[state.city] || !state.city ? false : true}
              onClick={applyFilters}
            >
              Buscar{' '}
            </button>
          </Link>

          <button
            className="group w-1/2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white dark:focus:ring-cyan-800 sm:w-1/4 xl:w-3/5"
            onClick={clicked}
          >
            Busqueda Avanzada
          </button>
        </div>
      ) : (
        <Link to="/home" className="flex justify-center xl:w-1/5 xl:p-2">
          <button
            className="group flex w-1/2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white dark:focus:ring-cyan-800 xl:w-4/5"
            disabled={citiesA[state.city] || !state.city ? false : true}
            onClick={applyFilters}
          >
            <span className="w-full rounded-md bg-white p-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 ">
              Buscar{' '}
            </span>
          </button>
        </Link>
      )}
    </div>
  )
}
