<script setup>
import { reactive, ref,onMounted} from "vue";
import { useRouter } from "vue-router";
import { useExamStore } from "@/stores/ExamStore";
const props = defineProps({
  id: String
})




const examStore = useExamStore();
const router = useRouter();
onMounted(() => {
  
  examStore.getPapers(props.id);
});
 
 
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                       Paper Name  
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Questions
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action  
                    </th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="paper in examStore.papers" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ paper.name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ paper.question_count }}
                    </td>
                    <td class="px-6 py-4">
                        <router-link :to="{ name: 'question', params: { id: paper.id }}" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Start Paper </router-link>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    
    </template>
    
