import axios from 'axios'

const API_URL = "https://proyecto-final-production-e0fd.up.railway.app/"


export const apiProperties = axios.create({
    baseURL:API_URL
})