import login from '../views/login.vue'
import profile from '../views/profile.vue'
import signup from '../views/signup.vue'
import questfeed from '@/views/questfeed'
import createQuest from '../views/createQuest.vue'
import createQuest2 from '../views/createQuest2.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    { path: '/login', component: login }, 
    { path: '/profile', component: profile },
    { path: '/signup', component: signup },
    { path:'/feed',component:questfeed},
    {path: '/createQuest',component:createQuest},
    {path: '/createQuest2',component:createQuest2}
]
const router = new VueRouter({mode: 'history',routes})

export default router;