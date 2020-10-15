 import axios from 'axios'

// main base URL to make request to the movie database

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance;