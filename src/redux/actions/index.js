import axios from 'axios'
import {
  GET_CITIES_A,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  RESET_FILTERS,
  LOAD_USER_INFO,
  UPDATE_USER,
  POST_COMMENT,
  RESET_USER,
  FILTER_NORMAL,
  FILTER_CITY,
  RESET_DETAIL,
  CONTACT_OWNER,
  RESET_ALERT,
} from './actionTypes'
import { API_URL } from '../../services/api/baseApi'
import callsApi from '../../services'

export function getallProperties() {
  return async function (dispatch) {
    const resu = await callsApi.getProperties()
    dispatch({
      type: 'GET_ALL_PROPERTIES',
      payload: resu.data.payload,
    })
  }
}

export function getCities() {
  return async function (dispatch) {
    const result = callsApi.getCities()
    const sortedCities = result.data?.payload.sort((a, b) => {
      if (a.city > b.city) return 1
      if (a.city < b.city) return -1
      return 0
    })
    dispatch({ type: 'GET_CITIES', payload: sortedCities })
  }
}

export function filterProperties(filteredProperties) {
  return {
    type: 'FILTER_PROPERTIES',
    payload: filteredProperties.length
      ? filteredProperties
      : 'No se encontraron propiedades con los filtros indicados',
  }
}

export function postPorperty(data, services, files) {
  return function (dispatch) {
    const arrFiles = Object.values(files)
    let promises = []
    arrFiles.map((f) => {
      const data = new FormData()
      data.append('file', f)
      data.append('upload_preset', 'tomi_test')
      promises.push(
        axios.post(
          'https://api.cloudinary.com/v1_1/deauhmx0e/image/upload',
          data
        )
      )
    })

    Promise.all(promises).then((values) => {
      const urls = values.map((v) => v.data.secure_url)

      let {
        antiquity,
        area,
        bathrooms,
        idCity,
        enviroments,
        floors,
        garage,
        rooms,
        adressName,
        adressNumber,
        modality,
        type,
        description,
        observation,
        price,
      } = data
      let trueServices = []
      for (const s in services) {
        if (services[s]) trueServices.push(s)
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
      axios
        .post(`${API_URL}/properties/createProperty`, fixedData)
        .then((r) => {
          let state = r.data.Message
            ? 'Propiedad creada con exito'
            : 'no se pudo publicar la propiedad'
          dispatch({ type: 'POST_PROPERTY', payload: state })
        })
    })
  }
}

export function getIdProperties(id) {
  return async function (dispatch) {
    let json = await callsApi.getIdProperties(id)
    return dispatch({
      type: 'GET_ID_PROPERTIES',
      payload: json.data.paylaod,
    })
  }
}

export function getCitiesA() {
  return async function (dispatch) {
    const result = await callsApi.getCities()
    let infoApiData = result.data.payload
    const cities = {}
    infoApiData.forEach((element) => {
      cities[`${element.city} ${element.provincia}`] = {
        id: element.idCity,
        name: element.city,
        provincia: element.provincia,
      }
    })
    dispatch({ type: GET_CITIES_A, payload: cities })
  }
}

export function addFavorites(values) {
  return {
    type: ADD_FAVORITES,
    payload: values,
  }
}

export function removeFavorite(value) {
  return {
    type: REMOVE_FAVORITE,
    payload: value,
  }
}

export function postSignUp(formData) {
  return async function (dispatch) {
    let { email, password, userName, photo, cellphone } = formData
    let data = {
      photo: photo,
      user_type: 'userLogged',
      email: email,
      userName: userName,
      password: password,
      cellphone: cellphone,
    }

    const res = await callsApi.postSignUp(data)
    dispatch({ type: 'POST_SIGNUP', payload: data })
  }
}

export function postLogin(formData) {
  return async function (dispatch) {
    let { email, password } = formData
    const fixedData = {
      email,
      password,
    }

    const res = await callsApi.login(fixedData)

    dispatch({ type: 'POST_SIGNUP', payload: res.data })
  }
}

// export function postSignUp(payload){
//     return async function(dispatch){
//        const postVideogame = await axios.post('http://localhost:3001/users/signUp',payload);
//        return postVideogame;
//     };
// }

export function resetFilters() {
  return { type: RESET_FILTERS, payload: [] }
}

export function loadUserInfo(userData) {
  return { type: LOAD_USER_INFO, payload: userData }
}

export function resetUser() {
  return { type: RESET_USER, paylaod: {} }
}

export function resetDetail() {
  return { type: RESET_DETAIL, paylaod: {} }
}

export function contactOwner(id_User, id_property) {
  return async function (dispatch) {
    const res = await callsApi.contactOwner({
      id_User,
      id: id_property,
    })

    dispatch({ type: CONTACT_OWNER, paylaod: '' })
  }
}

export function favoritesbyId_user(id_User) {
  return async function (dispatch) {
    let json = await callsApi.favoritesbyId_user(id_User)

    return dispatch({
      type: 'GET_ID_FAVORITE',
      payload: json.data.paylaod,
    })
  }
}

export function postComment(data) {
  return async function (dispatch) {
    const res = await callsApi.postComment(data)
    dispatch({ type: POST_COMMENT, paylaod: res.data.payload })
  }
}

// Logica de filtros

export function filterNormal(values = {}) {
  return {
    type: FILTER_NORMAL,
    payload: values,
  }
}

export function resetAlert() {
  return { type: RESET_ALERT, paylaod: [] }
}
