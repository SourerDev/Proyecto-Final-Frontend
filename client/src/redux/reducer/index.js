import {GET_CITIES_A, ADD_FAVORITES,REMOVE_FAVORITE, RESET_FILTERS,LOAD_USER_INFO, UPDATE_USER, RESET_USER} from '../actions/actionTypes.js';

const initialState = {
    properties : [],
    filteredProperties: [],
    detail:{},
    cities: [],
    citiesA:{},
    favorites: [],
    user: {},
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

        case "GET_ID_PROPERTIES":
            return{
                ...state,
                detail: action.payload
            }

        case GET_CITIES_A:
            return{
                ...state,
                citiesA: action.payload
            }
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites,...action.payload]
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter(element => element !== action.payload)
            }
        case RESET_FILTERS:
            return {
                ...state,
                filteredProperties: []
            }
        case LOAD_USER_INFO: 
            return {
                ...state,
                user: action.payload
            }
        case RESET_USER: 
            return {
                ...state,
                user: {}
            }
            default:
               return state
    }
}