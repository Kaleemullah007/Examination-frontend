import { http } from "./http_service";

export function register(data){
    return http().post('/register',data)
}
export function login(data){
    return http().post('/login',data)
}

export function logOut(){
    return http().post('/logout')
}


export function varification(data){
    return http().post('/varification',data)
}


