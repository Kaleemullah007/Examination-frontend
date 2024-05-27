<script setup>
import { reactive, ref,onMounted} from "vue";
import { useRouter } from "vue-router";
import { useExamStore } from "@/stores/ExamStore";
import { useAuthStore } from "@/stores/authStore";

    import { Check,Variable } from "lucide-vue-next";

const authStore = useAuthStore();




const examStore = useExamStore();
const router = useRouter();
onMounted(() => {
  examStore.getResults(authStore.getUser().id);
});
 
 
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                       Subject Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Paper Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Attempts
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Wrong 
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Correct
                    </th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="test in examStore.tests" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ test.subject_name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ test.paper_name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ test.user_attempts }}
                    </td>
                    <td class="px-6 py-4">
                      
                        
                            <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10" >{{ test.wrong_answer }}</span>                       
                        
                        
                      
                       
                    </td>
                    <td class="px-6 py-4">
                        
                        <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10" >{{ test.correct_answer }}</span>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    
    </template>
    
