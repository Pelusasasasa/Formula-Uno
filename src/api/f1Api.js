import axios from "axios";

const REACT_API_URL = process.env.REACT_APP_API_URL;
const REACT_API_HOST = process.env.REACT_APP_API_HOST;
const REACT_API_KEY = process.env.REACT_APP_API_KEY;

console.log({REACT_API_HOST, REACT_API_KEY, REACT_API_URL})

const f1Api = axios.create({
    baseURL: REACT_API_URL
});

f1Api.interceptors.request.use((config) => {

    config.headers = {
        ...config.headers,
        'x-rapidapi-host': REACT_API_HOST,
        'x-rapidapi-key': REACT_API_KEY
    }

    return config

})

export default f1Api;