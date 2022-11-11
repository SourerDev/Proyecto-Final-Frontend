import axios from 'axios'


export function getallProperties(){
    return async function(dispatch){
        const resu = await axios.get('http://localhost:3001/properties/getAll')
        dispatch({
            type:"GET_ALL_PROPERTIES",
            payload: resu.data
        })
    }
}

export function getCities() {
    /* return async function(dispatch) {
        const result = await axios.get('...')
        dispatch({type:"GET_CITIES", payload: result.data})
    } */
    // ruta para obtener las cities en proceso, mientras usamos esta fakeData
    const fakeData = ['Bariloche', 'Rafaela', 'Posadas', 'Carlos Paz']
    return {type: "GET_CITIES", payload: fakeData}
}

export function basicFilter(filteredProperties) {
    return {type: "BASIC_FILTER", payload: filteredProperties}
}

