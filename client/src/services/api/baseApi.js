import axios from 'axios'

export const API_URL = "https://proyecto-final-frontend-jhoniernem.vercel.app/"
/* Api: http://localhost:3001*/

export const apiProperties = axios.create({
    baseURL:API_URL
})