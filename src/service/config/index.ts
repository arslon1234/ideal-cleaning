import axios  from 'axios';
import type { AxiosInstance } from 'axios';
import { getDataFromCookie } from '@token-service';

const request : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    //   timeout: 48000,
})

request.interceptors.request.use((config)=>{
    const token = getDataFromCookie("token")
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})
export default request