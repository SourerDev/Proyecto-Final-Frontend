import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filter } from "../../utils/filters.js";
import { filterProperties } from "../../redux/actions/index";
import AutocompleteSearch from "../autocomplete-search/autocompleteSearch";

export default function LandingSearch({ clicked }) {
  const dispatch = useDispatch();
  const { properties, cities, citiesA } = useSelector((state) => state);

  const [state, setState] = useState({
    operation: "",
    propertyType: "",
    city: "",
    idCity: null,
  });

  const stateHandleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "city") {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
          idCity: citiesA[value] ? citiesA[value].id : null,
        };
      });
    } else {
      setState((previus) => {
        return {
          ...previus,
          [name]: value,
        };
      });
    }
  };

  return (
    <div className="flex flex-col w-full  p-2 space-y-2 rounded bg-slate-900/70 backdrop-blur-sm lg:p-6 xl:flex-row xl:space-y-0 ">
      <div className="flex flex-col w-full  p-2 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 lg:px-2 xl:w-4/5 ">
        <div className="flex w-full space-x-2 flex-1">
          <select
            className="flex-1 p-2 rounded outline-none focus:border-b-2 border-blue-900 shadow-sm"
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
            className="flex-1 p-2 rounded outline-none focus:border-b-2 border-blue-900 shadow-sm"
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

        <div className="rounded overflow-hidden flex-1">
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
              className="h-full w-full p-2 text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              disabled={citiesA[state.city] || !state.city ? false : true}
              onClick={() =>
                dispatch(filterProperties(filter(properties, state)))
              }
            >
              Buscar{" "}
            </button>
          </Link>

          <button
            className="w-1/2 sm:w-1/4 xl:w-3/5 text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={clicked}
          >
            Busqueda Avanzada
          </button>
        </div>
      ) : (
        <Link to="/home" className="flex justify-center xl:w-1/5 xl:p-2">
          <button
            className="w-1/2 xl:w-4/5 flex text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            disabled={citiesA[state.city] || !state.city ? false : true}
            onClick={() =>
              dispatch(filterProperties(filter(properties, state)))
            }
          >
            <span className="w-full p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
              Buscar{" "}
            </span>
          </button>
        </Link>
      )}
    </div>
  );
}
