import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The api URL(cloud function URL)
})

export default instance;