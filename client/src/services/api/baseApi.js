import axios from 'axios'

const API_URL = "https://testing-url-mercadopago-git-testing-url-mercadopago-jhoniernem.vercel.app/"


export const apiProperties = axios.create({
    baseURL:API_URL
})