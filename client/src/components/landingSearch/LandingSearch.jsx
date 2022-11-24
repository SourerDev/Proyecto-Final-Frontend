import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filter } from "../../utils/filters.js";
import { filterProperties } from '../../redux/actions/index';
import AutocompleteSearch from '../autocomplete-search/autocompleteSearch';


export default function LandingSearch() {
  const dispatch = useDispatch();
  const { properties, cities, citiesA } = useSelector(state => state);

  const [state, setState] = useState({
    operation: "",
    propertyType: "",
    city: "",
    idCity: null
  })

  const stateHandleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'city') {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null
        };
      });
    }
    else {
      setState((previus) => {
        return {
          ...previus,
          [name]: value
        };
      });
    }
  }


  return (
    <div className=' m-2 lg:flex items-center  grid sm:justify-items-center bg-gray-800 mt-96 px-8 py-2 '>
      <select
        className='border-4  rounded lg:m-2 lg:p-2'
        name="operation"
        onChange={stateHandleChange}
        value={state.operation}
      >
        <option  value="" disabled hidden>Operación</option>
        <option value="Venta">Comprar</option>
        <option value="Alquiler">Alquilar</option>
      </select>
      <select
        className='lg:m-2 border-4 rounded lg:p-2'
        name="propertyType"
        onChange={stateHandleChange}
        value={state.propertyType}
      >
        <option value="" disabled hidden>Tipo de propiedad</option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="PH">PH</option>
        <option value="Finca">Finca</option>
      </select>

      <div className=' border-4 rounded'>
        <AutocompleteSearch

          apiData={citiesA}
          city={state.city}
          stateHandleChange={stateHandleChange}

        />
      </div>
      

      
      <Link to='/home'>
        <button
          className='  relative lg:m-2 inline-flex items-center justify-center p-0 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
          disabled={citiesA[state.city] || !state.city ? false : true}
          onClick={() => dispatch(filterProperties(filter(properties, state)))}
        >
          <span class=" lg:p-2  lg:px-7 lg:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 " >
            Buscar </span>

        </button>
      </Link>
     

    </div>
  )
}