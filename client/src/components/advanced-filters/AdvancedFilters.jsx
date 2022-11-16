import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import AutocompleteSearch from "../autocomplete-search/autocompleteSearch.jsx";
import {filter} from "../../utils/filters.js";
import {filterProperties} from "../../redux/actions/index.js";

export default function AdvancedFilters(){
    const dispatch = useDispatch()
    const {properties, citiesA} = useSelector(state => state)
    const [state,setState]=useState({
      operation: "",
      propertyType: "",
      city: "",
      idCity: null,
      rooms:0,
      bathrooms:0,
      floors: "",
      environments:"",
      garage:"",
      antiquity:{min:null, max:null},
      area:{min:null, max:null},
      price:{min:null, max:null}, 
    })
    
    const stateHandleChange = (evt) => {
        const { name, value} = evt.target;
        const [nameA,nameB] = name.split('-');

        if(nameA === 'price' || nameA === 'antiquity' || nameA === 'area'){
            console.log('ENTROOOO')
            setState((previus) => {
                return {
                  ...previus,
                  [nameA]:{
                    ...previus[nameA],
                        [nameB]: value
                  }
                };
              });
        }else if(name === 'city') {
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

    return(
        <div className= ' h-full   bg-gray-300'>
            <div >
             <br/>
            <div className=" h-0  flex flex-col p-2 pb-20">
                <label className="sm-text-xl 2xl-text-3xl italic font-semibold text-center text-gray-900 dark:text-white" htmlFor="price">Precio</label>
                    <div className='flex h-10 mb-5 slice-y-2'>
                        <input className="w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "  id='minPrice' value={state.price.min} onChange={stateHandleChange} name='price-min' placeholder="Desde"/>
                        <p>_</p>
                        <input className="w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id='maxPrice' value={state.price.max} onChange={stateHandleChange} name='price-max' placeholder="Hasta"/>
                    </div>
                </div>
                <br/>
            <div className=" px-2 h-9 ">
                <select className="pb-6 sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="operation"
                onChange={stateHandleChange}
                value = {state.operation}
                >
                    <option value="" disabled hidden>Operación</option>
                    <option value="Venta">Comprar</option>
                    <option value="Alquiler">Alquilar</option>
                </select>
            </div> <br/>
            <div className="px-2">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="propertyType"
                onChange={stateHandleChange}
                value={state.propertyType}
                >
                    <option selected>Tipo de propiedad</option>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                    <option value="PH">PH</option>
                    <option value="Finca">Finca</option>
                </select>
            </div> <br/>
            <div className=" px-2 flex justify-center ">
                <AutocompleteSearch 
                
                    apiData={citiesA}
                    city={state.city}
                    stateHandleChange={stateHandleChange}
                />
            </div> <br/>
            <div className="px-2 h-5">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="environments"
                    onChange={stateHandleChange}
                    value={state.environments}
                >
                    <option value="">cantidad de ambientes</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div> <br/>
            <div className="px-2 h-5">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="floors" 
                    onChange={stateHandleChange}
                >
                    <option value="">cantidad de pisos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <br/>
            <div className="px-2 h-5">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="rooms"
                    onChange={stateHandleChange} 
                >
                    <option value="">cantidad de cuartos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <br/>
            <div className="px-2 h-5">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="bathrooms" 
                    onChange={stateHandleChange}
                >
                    <option value="">cantidad de baños</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
            </div>
            <br/>
            <div className="px-2 h-5">
                <select className="sm:text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="garage" 
                    onChange={stateHandleChange}
                >
                    <option value="">cantidad de cocheras</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select> 
            </div>    
            
            <br/>
            <div className=" px-2 h-11 flex flex-col p-2">
                <label className="sm-text-xl 2xl-text-3xl italic font-semibold text-center text-gray-900 dark:text-white" htmlFor="area">Area (en metros²)</label>
                    <div className='flex slice-y-2'>
                        <input className=" w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id='minArea' value={state.area.min} onChange={stateHandleChange} name='area-min'placeholder="Desde"/>
                        <p>_</p>
                        <input className="w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id='maxArea' value={state.area.max} onChange={stateHandleChange} name='area-max' placeholder="Hasta"/>
                    </div>
            </div>
            <br/>
            <div className="flex flex-col p-2">
                <label className="sm-text-xl 2xl-text-3xl italic font-semibold text-center text-gray-900 dark:text-white" htmlFor="price">Antiguedad (en años)</label>
                    <div className='flex slice-y-2'>
                        <input className="w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id='minAntiquity' value={state.antiquity.min} onChange={stateHandleChange} name='antiquity-min' placeholder="Desde"/>
                        <p>_</p>
                        <input className="w-20 sm:text-center
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id='maxAntiquity' value={state.antiquity.max} onChange={stateHandleChange} name='antiquity-max' placeholder="Hasta"/>
                    </div>
            </div>
            <br/>
            <div class="flex justify-center">
                <div>
                <button 
                    className="p-2 bg-blue-500 rounded-full"
                    onClick={() => dispatch(filterProperties(filter(properties, state)))}
                >
                    Aplicar filtros
                </button>
            </div>
            <br />
            <br />
            </div>
            </div>
        </div>
    )
}
