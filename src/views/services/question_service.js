import { http } from "./http_service";
export function questions(){
    return http().get('/questions')
}
