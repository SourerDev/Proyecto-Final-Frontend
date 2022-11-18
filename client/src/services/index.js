import {apiProperties} from './api/baseApi.js';

const property = 'properties';
const user = 'users'

const callsApi = {
    getProperties: function() {
        return apiProperties.get(`${property}/createProperty`)
    },
    login: function (data) {
        return apiProperties.post(`${user}/login`,data)
    }
}



export default callsApi;