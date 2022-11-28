import { valuesCities} from "../../utils/autocompleteUtils";

export default function AutocompleteSearch({apiData, city, stateHandleChange, refCity}) {

  return (
    <div className="">
      <div className="border-1 rounded item-center ">
        <input ref={refCity}
        className="w-full placeholder:text-black p-2"
          list="ubications"
          name="city"
          value={city}
          onChange={stateHandleChange}
          placeholder="Seleccione una ciudad"
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