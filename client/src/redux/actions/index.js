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

export function postPorperty(formData, services) {
    return async function(dispatch) {
        let {antiquity, area, bathrooms, city, enviroments, floors, garage, rooms, adressName, adressNumber, images, modality, type, description, observation, price} = formData;
        let trueServices = []
        for(const s in services) {
            if(services[s]) trueServices.push(s)
        }
        const fixedData = {
            images: [images],
            modality,
            type,
            address: `${adressName} ${adressNumber}`,
            services: trueServices,
            antiquity: parseInt(antiquity),
            area: parseInt(area),
            bathrooms: parseInt(bathrooms),
            idCity: parseInt(city),
            environments: parseInt(enviroments),
            floors: parseInt(floors),
            garage: parseInt(garage),
            rooms: parseInt(rooms),
            price: parseInt(price),
            description,
            observation,
        }
        console.log(fixedData)
        await axios.post("http://localhost:3001/createProperty", fixedData)
        dispatch({type: "POST_PROPERTY", payload: fixedData})
    }
}





















