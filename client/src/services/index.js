
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
    contactOwner: function(data) {
        return apiProperties.post("/interested/userInterested", data)
    }
}

















   




export default callsApi;