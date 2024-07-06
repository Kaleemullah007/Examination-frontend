import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  Login  from "../views/auth/Login.vue";
import  Register  from "../views/auth/Register.vue";

import  Result  from "../views/exam/Result.vue";
import  Paper  from "../views/exam/Paper.vue";
import  Question  from "../views/question/View.vue";
import  Subject  from "../views/subject/View.vue";
import { toast } from 'vue3-toastify';
import { useAuthStore } from '../stores/authStore';
import EmailVerfication from '../views/auth/email-verfication.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children:[
      //   path:'',
      //   name:'',
      //   component:()=>import('')
      // ]
     
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        if(!authStore.isLoggedIn){
          next()
        }else{
          next('/subject')
        }
      }
    },


    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        if(!authStore.isLoggedIn){
          next()
        }else{
          next('/validateemail')
        }
      }
    },

    {
      path: '/validateemail',
      name: 'validateemail',
      component: EmailVerfication
      
    },


    {
      path: '/result',
      name: 'result',
      component: Result,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        if(authStore.isLoggedIn){
          next()
        }else{
          next('/login')
        }
      }

    },
    {
      path: '/test',
      name: 'test',
      component: Result
    },
    {
      path: '/paper/:id',
      name: 'paper',
      component: Paper,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        if(authStore.isLoggedIn){
          next()
        }else{
          next('/login')
        }
      },props: true
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        if(authStore.isLoggedIn){
          next()
        }else{
          next('/login')
        }
      },props: true
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject,
      beforeEnter(to,from,next){
        const authStore = useAuthStore();
        
        if(authStore.isLoggedIn){
          next()
        }else{
          next('/login')
        }
      }
    },

   

  ],
 
})

export default router
