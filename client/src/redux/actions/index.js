import axios from 'axios'
import {
  GET_CITIES_A,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  RESET_FILTERS,
  LOAD_USER_INFO,
} from "./actionTypes";

import callsApi from '../../services'

export function getallProperties() {
  return async function (dispatch) {
    const resu = await callsApi.getProperties()
    dispatch({
      type: "GET_ALL_PROPERTIES",
      payload: resu.data.payload,
    });
  };
}

export function getCities() {
  return async function (dispatch) {
    const result = callsApi.getCities()
    const sortedCities = result.data?.payload.sort((a, b) => {
      if (a.city > b.city) return 1;
      if (a.city < b.city) return -1;
      return 0;
    });
    dispatch({ type: "GET_CITIES", payload: sortedCities });
  };
}

export function filterProperties(filteredProperties) {
  console.log(filteredProperties);
  return { type: "FILTER_PROPERTIES", payload: filteredProperties };
}


export function postPorperty(data, services, files) {
    return function(dispatch) {
        
        const arrFiles = Object.values(files);
        let promises = []
        arrFiles.map((f) => {
            const data = new FormData()
            data.append('file', f)
            data.append('upload_preset', "tomi_test")
            promises.push(axios.post("https://api.cloudinary.com/v1_1/deauhmx0e/image/upload", data))
        }) 

        Promise.all(promises).then(values => {
            const urls = values.map( v => v.data.secure_url)
            console.log(urls)

            let {antiquity, area, bathrooms, idCity, enviroments, floors, garage, rooms, adressName, adressNumber,  modality, type, description, observation, price} = data;
            let trueServices = []
            for(const s in services) {
                if(services[s]) trueServices.push(s)
            }
            const fixedData = {
                images: urls,
                modality,
                type,
                address: `${adressName} ${adressNumber}`,
                services: trueServices,
                antiquity: parseInt(antiquity),
                area: parseInt(area),
                bathrooms: parseInt(bathrooms),
                idCity: idCity,
                environments: parseInt(enviroments),
                floors: parseInt(floors),
                garage: parseInt(garage),
                rooms: parseInt(rooms),
                price: parseInt(price),
                description,
                observation,
            }
            axios.post("http://localhost:3001/properties/createProperty", fixedData)
            .then(r => {
                let state = r.data.Message ? "Propiedad creada con exito" : "no se pudo publicar la propiedad"
                dispatch({type: "POST_PROPERTY", payload: state})
            })
       };
}

export function getIdProperties(id) {
  return async function (dispatch) {
    let json = await callsApi.getIdProperties(id);
    console.log(json);
    return dispatch({
      type: "GET_ID_PROPERTIES",
      payload: json.data.paylaod,
    });
  };
}



export function getCitiesA() {
  return async function (dispatch) {
    const result = await callsApi.getCities();
    let infoApiData = result.data.payload;
    const cities = {};
    infoApiData.forEach((element) => {
      cities[`${element.city} ${element.provincia}`] = {
        id: element.idCity,
        name: element.city,
        provincia: element.provincia,
      };
    });
    dispatch({ type: GET_CITIES_A, payload: cities });
  };
}

export function addFavorites(values) {
  return {
    type: ADD_FAVORITES,
    payload: values,
  };
}

export function removeFavorite(value) {
  return {
    type: REMOVE_FAVORITE,
    payload: value,
  };
}


export function postSignUp(formData) {
  return async function (dispatch) {
    let { email, password, userName } = formData;
    let data = {
      user_type: "userLogged",
      email: email,
      userName: userName,
      password: password,
    };
    console.log(data);
    
    const res = await callsApi.postSignUp(data)
    console.log(res);
    dispatch({ type: "POST_SIGNUP", payload: data });
  };
}

export function postLogin(formData) {
  return async function (dispatch) {
    let { email, password } = formData;
    const fixedData = {
      email,
      password,
    };
    console.log(fixedData);
    const res = await callsApi.login(fixedData)
    console.log(res.data);
    dispatch({ type: "POST_SIGNUP", payload: res.data });
  };
}

// export function postSignUp(payload){
//     return async function(dispatch){
//        const postVideogame = await axios.post('http://localhost:3001/users/signUp',payload);
//        return postVideogame;
//     };
// }

export function resetFilters() {
  return { type: RESET_FILTERS, payload: [] };
}

export function loadUserInfo(userData) {
  return { type: LOAD_USER_INFO, payload: userData };
}
