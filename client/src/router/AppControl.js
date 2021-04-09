
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import contact from '@/views/contact'
import questfeed from '@/views/questfeed'
import admin_approve from '../views/Admin/Admin_approve.vue'
import createQuest2 from '../views/createQuest2.vue'
import lab from '../views/Atomtest.vue'
import quest from '../views/seeQuest.vue'
import myquest from '../views/myquest.vue'
import mywork from '../views/mywork.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import rateUser from '../views/rateUser.vue'
import profile from '../views/profile/index.vue'
import aboutUs from '../views/aboutUs.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: contact },
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/contact', component: contact },
    { path: '/profile/id/:id', component: profile},
    { path: '/feed', component: questfeed ,name:'feed'},
    { path: '/feed/', component: questfeed },
    { path: '/rateUser',component: rateUser},
    { path: '/createQuest2', component: createQuest2 },
    { path: '/lab', component: lab },
    { path: '/admin', component: admin_approve },
    { path : '/quest/id/:id',component : quest},
    { path : '/myquest',component : myquest},
    { path : '/mywork',component : mywork},
    { path : '/aboutus',component : aboutUs}

]

const router = new VueRouter({ mode: 'history', routes })

export default router;