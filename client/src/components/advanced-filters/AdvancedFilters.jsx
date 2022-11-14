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
        <div className=''>
            <div className="flex flex-col p-2">
                <label htmlFor="price">Precio</label>
                    <div className='flex slice-y-2'>
                        <input className="w-20" id='minPrice' value={state.price.min} onChange={stateHandleChange} name='price-min' placeholder="Desde"/>
                        <p>...</p>
                        <input className="w-20" id='maxPrice' value={state.price.max} onChange={stateHandleChange} name='price-max' placeholder="Hasta"/>
                    </div>
                </div>

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
            </div>
            <div>
                <select 
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
            </div>
            <div>
                <AutocompleteSearch 
                    apiData={citiesA}
                    city={state.city}
                    stateHandleChange={stateHandleChange}
                />
            </div>
            <div>
                <select 
                    name="environments"
                    onChange={stateHandleChange}
                    value={state.environments}
                >
                    <option value="">environments</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <select 
                    name="floors" 
                    onChange={stateHandleChange}
                >
                    <option value="">floors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div>
                <select 
                    name="rooms"
                    onChange={stateHandleChange} 
                >
                    <option value="">rooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
                
            <div>
                <select 
                    name="bathrooms" 
                    onChange={stateHandleChange}
                >
                    <option value="">bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
            </div>
            <div>
                <select 
                    name="garage" 
                    onChange={stateHandleChange}
                >
                    <option value="">garage</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select> 
            </div>    
            
            
            <div className="flex flex-col p-2">
                <label htmlFor="area">Area</label>
                    <div className='flex slice-y-2'>
                        <input className="w-20" id='minArea' value={state.area.min} onChange={stateHandleChange} name='area-min'placeholder="Desde"/>
                        <p>...</p>
                        <input className="w-20" id='maxArea' value={state.area.max} onChange={stateHandleChange} name='area-max' placeholder="Hasta"/>
                    </div>
            </div>
            <div className="flex flex-col p-2">
                <label htmlFor="price">Antiquity</label>
                    <div className='flex slice-y-2'>
                        <input className=" w-20" id='minAntiquity' value={state.antiquity.min} onChange={stateHandleChange} name='antiquity-min' placeholder="Desde"/>
                        <p>...</p>
                        <input className="w-20" id='maxAntiquity' value={state.antiquity.max} onChange={stateHandleChange} name='antiquity-max' placeholder="Hasta"/>
                    </div>
            </div>
            <div>
                <button 
                    className="p-2 bg-blue-500"
                    onClick={() => dispatch(filterProperties(filter(properties, state)))}
                >
                    Aplicar filtros
                </button>
            </div>
        </div>
    )
}
