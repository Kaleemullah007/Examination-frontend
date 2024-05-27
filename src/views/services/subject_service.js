import { http } from "./http_service";
export function dbsubjects(){
    return  http().get('/subjects');
}

