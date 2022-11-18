import {apiProperties} from './api/baseApi.js';

const property = 'properties';
const user = 'users'

const callsApis = {
    getProperties: function(params) {
        return apiProperties.get(`${property}/createProperty`)
    },
}



export default callsApis;