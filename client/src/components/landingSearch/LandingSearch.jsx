import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {filter} from "../../utils/filters.js";
import {filterProperties} from '../../redux/actions/index';
import AutocompleteSearch from '../autocomplete-search/autocompleteSearch';


export default function LandingSearch() {
  const dispatch = useDispatch();
  const {properties, cities, citiesA} = useSelector(state => state);
  
  const [state, setState] = useState({
    operation: "",
    propertyType: "",
    city: "",
    idCity: null
  })

  const stateHandleChange = (evt) => {
    const { name, value} = evt.target;
    if(name === 'city') {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id :null
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
    <div>
      <select 
        name="operation"
        onChange={stateHandleChange}
        value = {state.operation}
      >
        <option value="" disabled hidden>Operación</option>
        <option value="Venta">Comprar</option>
        <option value="Alquiler">Alquilar</option>
      </select>
      <select 
        name="propertyType"
        onChange={stateHandleChange}
        value={state.propertyType}
      >
        <option value=""disabled hidden>Tipo de propiedad</option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="PH">PH</option>
        <option value="Finca">Finca</option>
      </select>
      
      <AutocompleteSearch 
        apiData={citiesA}
        city={state.city}
        stateHandleChange={stateHandleChange}
      />
      
      <Link to='/home'>
        <button
          disabled ={citiesA[state.city] || !state.city ? false :true }
          onClick={ () => dispatch(filterProperties(filter(properties,state))) }
        >
          Buscar
        </button>
      </Link>
    </div>
  )
}