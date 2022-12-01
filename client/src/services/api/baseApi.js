import axios from 'axios'

export const API_URL = "https://proyecto-final-production-e0fd.up.railway.app"
//export const API_URL = "http://localhost:3001"

export const apiProperties = axios.create({
    baseURL:API_URL
})