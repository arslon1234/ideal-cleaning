import axios  from 'axios';
import type { AxiosInstance } from 'axios';
import { getDataFromCookie } from '@token-service';

const request : AxiosInstance = axios.create({
    baseURL: "https://app.olimjanov.uz/v1",
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