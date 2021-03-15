import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Admin_approve.vue'
import seeQuest from '../views/seeQuest.vue'
import Admin_approve from '../views/Admin_approve.vue'
import adminFeed from '../views/adminFeed.vue'
import report from '../views/report.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path : '/quest/id/:id',component : seeQuest},
  { path : '/adminapprove',component : Admin_approve},
  { path : '/adminfeed',component : adminFeed},
  { path : '/adminreport',component : report}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
