import home from '@/views/landing'
import login from '../views/login.vue'
import profile from '@/views/profile.vue'
import signup from '../views/signup.vue'
import questfeed from '@/views/questfeed'
import createQuest2 from '../views/createQuest2.vue'
import lab from '../views/lab.vue'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/profile', component: profile },
    { path: '/signup', component: signup },
    { path: '/feed', component: questfeed },
    { path: '/createQuest2', component: createQuest2 },
    { path: '/lab', component: lab }
]
const router = new VueRouter({ mode: 'history', routes })

export default router;