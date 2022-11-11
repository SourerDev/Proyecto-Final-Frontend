import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {basicFilter} from '../../redux/actions/index';
import {filterLanding} from "../../utils/filters.js";

export default function LandingSearch() {
  const dispatch = useDispatch();
  const {properties, cities} = useSelector(state => state);
  
  const [operation, setOperation] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [city, setCity] = useState(null);

  return (
    <div>
      <select 
        name="operation"
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value={null}>Operación</option>
        <option value="comprar">Comprar</option>
        <option value="alquilar">Alquilar</option>
      </select>
      <select 
        name="propertyType"
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value={null}>Tipo de propiedad</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="ph">PH</option>
        <option value="bungalow">Bungalow</option>
      </select>
      <select 
        name="location"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value={null}>Ubicacion</option>
        {cities.map(city => <option value={city}>{city}</option>)}
      </select>
      <Link to='/home'>
        <button 
          onClick={ () => dispatch(basicFilter(filterLanding(properties, operation, propertyType, city))) }
        >
          Buscar
        </button>
      </Link>
    </div>
  )
}