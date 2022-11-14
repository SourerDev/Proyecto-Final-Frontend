import { valuesCities} from "../../utils/autocompleteUtils";

export default function AutocompleteSearch({apiData, city, stateHandleChange,}) {

  return (
    <div>
      <div className="border-1 rounded justify item-center ">
        <input
        className=" w-full"
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
      {apiData[city] || !city ? null : <p className="text-red-700">eliga una de las opciones</p> }
    </div>
  )
}