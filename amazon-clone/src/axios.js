import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-b0837/us-central1/api' //The api URL(cloud function URL)
})

export default instance;