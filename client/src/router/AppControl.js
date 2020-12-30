import login from '../components/login.vue'
import profile from '../components/profile.vue'
import signup from '../components/signup.vue'
import questfeed from '@/views/questfeed'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
  
    
    { path: '/login', component: login }, 
    { path: '/profile', component: profile },
    { path: '/signup', component: signup },
    { path:'/feed',component:questfeed}
]
const router = new VueRouter({mode: 'history',routes})

export default router;