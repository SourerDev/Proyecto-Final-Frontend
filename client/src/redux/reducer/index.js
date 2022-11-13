import {GET_CITIES_A} from '../actions/actionTypes.js';

const initialState = {
    properties : [],
    filteredProperties: [],
    detail:[],
    cities: [],
    citiesA:{}
}



export default function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_ALL_PROPERTIES":
            return{
                ...state,
                properties: action.payload,
            }
        case "GET_CITIES": 
            return {
                ...state,
                cities: action.payload,
            }
        case "FILTER_PROPERTIES": 
            return {
                ...state,
                filteredProperties: action.payload,
            }
        case GET_CITIES_A:
            return{
                ...state,
                citiesA: action.payload
            }
        
            default:
             
        return state
    }
}