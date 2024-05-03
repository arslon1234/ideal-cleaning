import request from "../config";
import { Request } from "@auth-interface";
const auth:Request = {
    sign_in: (data)=>request.post("/auth/login", data),
    auth_verify: (data)=>request.post("/auth/verify", data),
    sign_up: (data)=> request.post("/auth/register",data),
    forgot_password: (data)=> request.post("/auth/forgot-password",data),
    update_password: (data)=> request.post("/auth/verify-forgot-password",data),
    sign_out: ()=> request.post("/signout"),
    reset: (data)=> request.post("/reset", data),
}

export default auth