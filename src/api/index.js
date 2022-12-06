import axios from "axios"

export const api_key = '63ba3d931610a012fada76b16b7ae0a5'

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})