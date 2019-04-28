import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/store',
});

instance.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    request.headers['x-auth'] = token ? token : '';
    return request;
  })

export default instance;