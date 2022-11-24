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
    }
}



export default callsApi;