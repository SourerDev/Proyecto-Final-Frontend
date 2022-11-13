import { valuesCities} from "../../utils/autocompleteUtils";

export default function AutocompleteSearch({apiData, city, stateHandleChange,}) {

  return (
    <div>
      <div>
        <input
          list="ubications"
          name="city"
          value={city}
          onChange={stateHandleChange}
          placeholder="Seleccionar city"
        />
        <datalist id="ubications">
          {valuesCities(apiData).map((element) => (
            <option key={apiData[element].id} value={element} id={apiData[element].id}/>
          ))}
        </datalist>
      </div>
      {apiData[city] || !city ? null : <p clasName='bg-red-300'>no existe</p> }
    </div>
  )
}