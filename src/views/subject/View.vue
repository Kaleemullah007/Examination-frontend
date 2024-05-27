<script setup>
import { reactive, ref} from "vue";
import { useRouter } from "vue-router";
import { useExamStore } from "@/stores/ExamStore";
import { Settings } from "lucide-vue-next";

const examStore = useExamStore();
const router = useRouter();

const dd = ref([])
 examStore.getSubjects();

 
// const navigateTo = (path) => {
// 	router.push(path);
// };


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
                        Papers
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action  
                    </th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="subject in examStore.subjects" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ subject.name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ subject.papers_count }}
                    </td>
                    <td class="px-6 py-4">
                       <!-- <router-link to="{paper,params: { id: {{`subject.id` }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Paper</router-link> -->
                       <router-link :to="{ name: 'paper', params: { id: subject.id }}">View Papers </router-link>
                       <!-- <router-link :to="`paper/` + subject.id">ssdsd</router-link> -->
                       <!-- <a href="paper/{{subject.id}}">sdsd</a> -->
                       <!-- <button @click="navigateTo('/paper/'+subject.id)"> -->
				
			<!-- </button> -->
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    
    </template>
    
