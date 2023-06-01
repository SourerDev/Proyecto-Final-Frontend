import axios from 'axios'

export const API_URL = process.env.REACT_APP_API_URL

export const apiProperties = axios.create({
  baseURL: API_URL,
})

export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com',
})
