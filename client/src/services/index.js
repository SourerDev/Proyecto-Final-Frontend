
import {apiProperties} from './api/baseApi.js';

const property = 'properties';
const user = 'users'
const city = 'cities'

const callsApi = {
    getProperties: function() {
        return apiProperties.get(`${property}/getAll`)
    },
    getIdProperties: function(id){
        return apiProperties.get(`${property}/findById/${id}`)
    },
    postPorperty: function (data) {
        return apiProperties.post(`${property}/createProperty`,data)
    },
    updatedProperty: function(id,newData){
        return apiProperties.put(`/properties/uplaodProperty/${id}`,newData)
    },
    getCities: function(){
        return apiProperties.get(`${city}`)
    },
    login: function (data) {
        return apiProperties.post(`${user}/login`,data)
    },
    postSignUp: function(data){
        return apiProperties.post(`${user}/createuser`,data)
    },

    postComment: function(data) {
        return apiProperties.post("/feedback/createFeedback", data)
    },
    postFavorite: function(data){
        return apiProperties.post("/favorites/createFavorite",data)
    },
    removeFavorite: function(id){
        return apiProperties.delete(`/favorite/delete/${id}`)
    },
    favoritesbyId_user: function(id_User){
        return apiProperties.get(`/favorites/${id_User}`)
    },
    contactOwner: function(data) {
        return apiProperties.post("/interested/userInterested", data)
    },

    deletePropery: function(id) {
        return apiProperties.delete(`/properties/deleteProperty/${id}`)
    },
    disabledProperty: function(idProperty){
        return apiProperties.put(`/properties/disableProperty/${idProperty}`)
    },
    deleteUser: function(idUser){
        return apiProperties.delete(`/users/delete/${idUser}`)
    },
    getAllUsers: function(){
        return apiProperties.get(`/users/allUsers`)
    },
    disabledUser: function(idUser,state){
        return apiProperties.put(`/users/upload/${idUser}`,{state:state})
    },
    updatedUser: function (idUser,newData) {
      return apiProperties.put(`/users/upload/${idUser}`,newData)  
    },
    postAnswer: function(data) {
        return apiProperties.post("/feedback/answerFeedback", data)
    }
}

















   




export default callsApi;