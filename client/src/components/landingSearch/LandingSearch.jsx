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
        <option value="Venta">Comprar</option>
        <option value="Alquiler">Alquilar</option>
      </select>
      <select 
        name="propertyType"
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value={null}>Tipo de propiedad</option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="PH">PH</option>
        <option value="Finca">Finca</option>
      </select>
      <select 
        name="location"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value={null}>Ubicacion</option>
        {cities.map(c => <option key={c.idCity} value={c.idCity}>{`${c.city}, ${c.provincia}`}</option>)}
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