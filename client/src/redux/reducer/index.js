const initialState = {
    properties : [],
    filteredProperties: [],
    detail:{},
    cities: [],
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
        case "BASIC_FILTER": 
            return {
                ...state,
                filteredProperties: action.payload,
            }
        case "GET_ID_PROPERTIES":
            return{
                ...state,
                detail: action.payload
            }
        default: 
        return state
    }
}