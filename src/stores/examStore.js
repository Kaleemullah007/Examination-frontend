import { defineStore } from "pinia";
export const useExamStore = defineStore('examstore',{
    state : ()=>{

       return  {
        subjects:[],
        papers : [],
        tests:[],
    }},
    actions:{
       
       
        async getSubjects() {
            
           
            const { dbsubjects }  =  await import('../views/services/subject_service');
            try {
                const response = await dbsubjects();
                 this.subjects = response.data.data;
               
            } catch (error) {
                throw error;
            }
        },

        async getPapers(id) {
            
           
            const { dbpapers }  =  await import('../views/services/paper_service');
            try {
                const response = await dbpapers(id);
                 this.papers = response.data.data;
               
            } catch (error) {
                throw error;
            }
        },

        async getResults(id) {
            
           
            const { dbresult }  =  await import('../views/services/test_service');
            try {
              
                const response = await dbresult(id);
                 this.tests = response.data.data;
               
            } catch (error) {
                throw error;
            }
        },


    

    },
   
});