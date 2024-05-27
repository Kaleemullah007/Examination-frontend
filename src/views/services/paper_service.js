import { http } from "./http_service";
export function dbpapers(id){
    return http().get('/papers?subject_id='+id)
}
