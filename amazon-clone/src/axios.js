import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-b0837.cloudfunctions.net/api' //The api URL(cloud function URL)
    //'http://localhost:5001/clone-b0837/us-central1/api' 
})

export default instance;