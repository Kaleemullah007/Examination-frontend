<template>
   
   <div class="grid content-start md:content-around">
                                    <div class="grid-cols-6 text-center">
<button @click="handleQuestion"  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    <RefreshCcw /> 
    Reload Questions If Not Loaded
    </button>
    </div>
    </div>
    


<div>Questions

    <form method="POST" @submit.prevent >
        <div class="grid grid-cols-4 gap-4">
<div v-for="(question, index) in paper.questions">
    
                                <div class="row mb-2">
                                    
                                    <label for="name" class="col-md-4 col-form-label text-md-end font-bold">Q:{{ index +=1 }} {{question.question}}</label>

                                    <div class="col-md-4 row"><div v-for="o in question.options" >
                                        <div class="col-md-3" v-if="question.question_type=='radio'" >
                                                   <input :type="question.question_type" :id="o.name" 
                                                   v-model="paper.test[question.id]" 
                                                   
                                                   :value="question.id +'__'+o.id  +'__radio__'+ o.name" :name="paper.test[o.id]"
                                                    >              
                                                   <label :for="o.name">{{o.name}}</label>
                                            </div>
                                            <div class="col-md-3" v-if="question.question_type=='checkbox'" >
                                                   <input :type="question.question_type" 
                                                   v-model="paper.test" 
                                                    :id="question.id +'__'+o.id  +'__checkbox__' +'__' + o.name"
                                                    :value="question.id +'__'+o.id  +'__checkbox__'+ o.name" :name="paper.test[o.id]" >              
                                                   <label :for="question.id +'__'+o.id  +'__checkbox__'+'__' + o.name">{{o.name}}</label>
                                            </div>

</div>
    

                                    </div>
                                </div>
</div>
</div>     

                            <div class="row mb-0">
                                <div class="grid content-start md:content-around">
                                    <div class="grid-cols-6 text-center">
                                    <button type="submit" id="submit" @click="handleSubmittion" :disabled="disabled" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
Submit Test
                                    </button>
                                </div>
                                </div>
                            </div>
                        </form>

</div>

   
</template>

<script setup>
import { reactive, ref,onMounted} from "vue";
import {question,submittion} from '../services/test_service'
import { toast } from 'vue3-toastify';
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import {RefreshCcw} from 'lucide-vue-next'
const props = defineProps({
  id: String
})
onMounted(() => {
  
    handleQuestion();
});
 
const authStore = useAuthStore();
const checkedNames = ref([])
const router = useRouter();
const paper  = reactive({
    paper_id:null,
    questions:[],
    test:[],
    subject_id:null,
   
   
});

const submit_paper  = reactive({
    paper_id:1,
    test:[],
    subject_id:1,
   
   
});




const errors = ref({});
  

  const disabled = ref(false);

const handleQuestion = async()=>{
    try{

const response =    await question(props.id);
console.log(response.data);
paper.questions  = response.data.data;
paper.subject_id  = response.data.subject_id;
paper.paper_id  = response.data.paper_id;




    }
    catch(error){
        errors.value = error.response.data.errors
        console.log(error)
    }
}



const handleSubmittion = async()=>{
    try{

        disabled.value = true;
        
const response =    await submittion(paper);

toast.success('Submitted test successfully');
console.log(response);
setTimeout(() => {
    router.push('/subject');    
}, 1000);


    }
    catch(error){

        console.log(error)
    }
}


</script>


