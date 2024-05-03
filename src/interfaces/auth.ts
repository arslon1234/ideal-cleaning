export interface SignUp{
    email: string;
    full_name: string;
    password: string;
    phone_number: string;
}
export interface SignIn{
    email: string;
    password: string;
}
export interface AuthVerify {
    code: string,
    email: string
}
export interface ForgotPassword {
    email: string
}
export interface UpdatePassword {
    code: string,
    new_password: string
}
export interface UpdatePassRequest extends UpdatePassword {
    email: string
}
export interface ResetPassword{
    email?: string;
    phone?: string|number;
}
export interface Request {
    sign_in:(data:SignIn)=>any,
    sign_up:(data:SignUp)=>any,
    auth_verify:(data:AuthVerify)=>any,
    forgot_password:(data:ForgotPassword)=> any,
    update_password:(data:UpdatePassRequest)=> any,
    sign_out:()=>void,
    reset:(data:ResetPassword)=>void
}