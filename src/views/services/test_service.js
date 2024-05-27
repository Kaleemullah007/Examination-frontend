import { http } from "./http_service";

export function question(id){
    
    return http().get('paper-questions?paper_id='+id)
}


export function submittion(data){
    
    return http().post('submit-test',data)
}


export function dbresult(id){
    
    return http().get('result?user_id='+id)
}




