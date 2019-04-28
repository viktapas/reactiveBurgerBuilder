import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://my-reactive-burger-builder.firebaseio.com/"
})

export default axiosInstance;