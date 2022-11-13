import axios from 'axios'


export function getallProperties(){
    return async function(dispatch){
        const resu = await axios.get('http://localhost:3001/properties/getAll')
        dispatch({
            type:"GET_ALL_PROPERTIES",
            payload: resu.data.payload
        })
    }
}

export function getCities() {
    return async function(dispatch) {
        const result = await axios.get('http://localhost:3001/cities')
        const sortedCities = result.data.payload.sort((a, b) => {
            if(a.city > b.city) return 1;
            if(a.city < b.city) return - 1;
            return 0
          })
        dispatch({type:"GET_CITIES", payload: sortedCities})
    }
}

export function basicFilter(filteredProperties) {
    return {type: "BASIC_FILTER", payload: filteredProperties}
}

export function getIdProperties(id){
    return async function (dispatch){
        
            let json = await axios.get(`http://localhost:3001/properties/findById/${id}`)
            console.log(json)
            return dispatch({
                type:"GET_ID_PROPERTIES",
                payload: json.data.paylaod
            })
        }
}

