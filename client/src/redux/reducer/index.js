import {
  GET_CITIES_A,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  RESET_FILTERS,
  LOAD_USER_INFO,
  UPDATE_USER,
  RESET_USER,
  FILTER_NORMAL,
  RESET_DETAIL,
  RESET_ALERT
} from "../actions/actionTypes.js";

const initialState = {
  properties: [],
  filteredProperties: [],
  detail: {},
  cities: [],
  citiesA: {},
  favorites: [],
  idFavorite: {},
  user: {
    favorites:[],
  },
  
  filters: {
    operation: "",
    propertyType: "",
    city: "",
    idCity: null,
    rooms: 0,
    bathrooms: 0,
    floors: "",
    environments: "",
    garage: "",
    antiquity: { min: null, max: null },
    area: { min: null, max: null },
    price: { min: null, max: null },
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROPERTIES":
      return {
        ...state,
        properties: action.payload,
      };
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    case "FILTER_PROPERTIES":
      return {
        ...state,
        filteredProperties: action.payload,
      };

    case "GET_ID_PROPERTIES":
      return {
        ...state,
        detail: action.payload,
      };
      case "GET_ID_FAVORITE":
        return {
          ...state,
        idFavorite: action.payload,
          
        };
        case GET_CITIES_A:
            return{
                ...state,
                citiesA: action.payload
            }
        case ADD_FAVORITES:
            return{
                ...state,
                user:{
                    ...state.user,
                    favorites: [...state.user.favorites,...action.payload]
                }
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                user:{
                    ...state.user,
                    favorites: state.user.favorites.filter(el => el !== action.payload)
                }
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
        case FILTER_NORMAL:
          return {
          ...state,
          filters: {
            ...state.filters,
            ...action.payload
          },
        };
        case RESET_DETAIL:
          return {
            ...state,
            detail: {}
          }
        case RESET_ALERT: 
          return {
            ...state,
            filteredProperties: [],
            filters: {
              operation: "",
              propertyType: "",
              city: "",
              idCity: null,
              rooms: 0,
              bathrooms: 0,
              floors: "",
              environments: "",
              garage: "",
              antiquity: { min: null, max: null },
              area: { min: null, max: null },
              price: { min: null, max: null },
            }
          }
            default:
               return state
    }
}
