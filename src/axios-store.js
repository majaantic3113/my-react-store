import axios from "axios";

// const instance = axios.create({
//     baseURL: 'http://localhost:8080/store',
// });

axios.defaults.baseURL = 'http://localhost:8080/store';

axios.interceptors.request.use();

export default instance;