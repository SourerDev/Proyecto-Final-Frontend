import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
//import { filterByOperation, filterByPropertyType, filterByLocation, getLoacations} from '../../redux/actions';

export default function LandingSearch() {
  const dispatch = useDispatch();
  
  const [operation, setOperation] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [location, setLocation] = useState(null);

  const allLocations = useSelector(state => state.locations)
  const mockLocations = ['Bariloche', 'Rafaela', 'Posadas', 'Carlos Paz'];

  /* useEffect(() => {
    dispatch(getLoacations())
  },[]) */

  return (
    <div>
      <select 
        name="operation"
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="default">Operación</option>
        <option value="comprar">Comprar</option>
        <option value="alquilar">Alquilar</option>
      </select>
      <select 
        name="propertyType"
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="default">Tipo de propiedad</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="ph">PH</option>
        <option value="bungalow">Bungalow</option>
      </select>
      <select 
        name="location"
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="default">Ubicacion</option>
        {mockLocations.map(city => <option value={city}>{city}</option>)}
      </select>
      <Link to='/home'>
        <button 
          onClick={() => {
            // operation && operation !== 'default' && dispatch(filterByOperation(operation));
            // propertyType && propertyType !== 'default' && dispatch(filterByPropertyType(propertyType));
            // location && location !== 'default' && dispatch(filterByLocation(location));
          }}
        >
          Buscar
        </button>
      </Link>
    </div>
  )
}