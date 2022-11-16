import axios from 'axios'

const API_URL = "http:localhost:3001/"


export const apiProperties = axios.create({
    baseURL:API_URL
})