import { apiProperties, apiGitHub } from './api/baseApi.js'

const property = 'properties'
const user = 'users'
const city = 'cities'

const callsApi = {
  getProperties: function () {
    return apiProperties.get(`${property}/getAll`)
  },
  getIdProperties: function (id) {
    return apiProperties.get(`${property}/findById/${id}`)
  },
  postPorperty: function (data) {
    return apiProperties.post(`${property}/createProperty`, data)
  },
  updatedProperty: function (id, newData) {
    return apiProperties.put(`/properties/uplaodProperty/${id}`, newData)
  },
  getCities: function () {
    return apiProperties.get(`${city}`)
  },
  login: function (data) {
    return apiProperties.post(`${user}/login`, data)
  },
  postSignUp: function (data) {
    return apiProperties.post(`${user}/createuser`, data)
  },

  postComment: function (data) {
    return apiProperties.post('/feedback/createFeedback', data)
  },
  postFavorite: function (data) {
    return apiProperties.post('/favorites/createFavorite', data)
  },
  removeFavorite: function (id) {
    return apiProperties.delete(`/favorite/delete/${id}`)
  },
  favoritesbyId_user: function (id_User) {
    return apiProperties.get(`/favorites/${id_User}`)
  },
  contactOwner: function (data) {
    return apiProperties.post('/interested/userInterested', data)
  },

  deletePropery: function (id) {
    return apiProperties.delete(`/properties/deleteProperty/${id}`)
  },
  disabledProperty: function (idProperty, state) {
    return apiProperties.put(`/properties/disableProperty/${idProperty}`, {
      state: state,
    })
  },
  deleteUser: function (idUser) {
    return apiProperties.delete(`/users/delete/${idUser}`)
  },
  getAllUsers: function () {
    return apiProperties.get('/users/allUsers')
  },
  disabledUser: function (idUser, state) {
    return apiProperties.put(`/users/upload/${idUser}`, { state: state })
  },
  updatedUser: function (idUser, newData) {
    return apiProperties.put(`/users/upload/${idUser}`, newData)
  },
  postAnswer: function (data) {
    return apiProperties.post('/feedback/answerFeedback', data)
  },
}

const routes = {
  PUBLICATION: 'publish',
  USERS: 'user',
  CITY: 'city',
}

export const ApiPropYou = {
  getPublications: function () {
    return apiProperties.get(`/${routes.PUBLICATION}/all`)
  },
  getFilteredPublications: function (filters) {
    return apiProperties.post(`/${routes.PUBLICATION}/filter`, filters)
  },
  getPublicationById: function ({ idPublication }) {
    return apiProperties.get(`/${routes.PUBLICATION}/${idPublication}`)
  },
  signIn: function ({ email, password }) {
    return apiProperties.post(`/${routes.USERS}/signin`, { email, password })
  },
  signUp: function ({ fName, lName, userName, email, password, cellphone }) {
    return apiProperties.post(`/${routes.USERS}/signup`, {
      fName,
      lName,
      userName,
      email,
      password,
      cellphone,
    })
  },
  googleSignin: function ({ credential }) {
    return apiProperties.post(`/${routes.USERS}/google`, { credential })
  },
  SetNewPassword: function ({ idUser, password, newPassword }) {
    return apiProperties.put(`/${routes.USERS}/new-password/${idUser}`, {
      password,
      newPassword,
    })
  },
  updateUser: function ({ idUser, data }) {
    return apiProperties.put(`/${routes.USERS}/${idUser}`, data)
  },
  getCities: function () {
    return apiProperties.get(`/${routes.CITY}/all`)
  },
  getSavedPublications: function (idUser) {
    return apiProperties.get(`/${routes.USERS}/saveds/${idUser}`)
  },
  setSaveds: function (idUser, idsPublication) {
    return apiProperties.put(`/${routes.PUBLICATION}/save`, {
      idUser,
      idsPublication,
    })
  },
}

export const ApiGitHub = {
  getUser: function ({ userName }) {
    return apiGitHub.get(`/users/${userName}`)
  },
}

export function addAuthorizationWithToken(token) {
  apiProperties.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default callsApi
