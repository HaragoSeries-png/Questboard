import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Fix
    title: 'Questboard',
    gurl: 'http://localhost:5000/',

    // Changeable
    userid: localStorage.getItem('uid') || '',
    token: localStorage.getItem('token') || '',
    islog: localStorage.getItem('islogin') || false,
    userfullname: localStorage.getItem('fullname') || '',

    // Maybe Unused
    currentUser: '',
    count: 0,
    userinfoma: '',
    notification:[]
  },
  getters: {
    getTitle(state) { return state.title },
    isLoggedIn(state) { return state.islog },
    getusername(state) { return state.currentUser },
    getfullname(state) { return state.userfullname },
    getcount(state) { return state.count },
    getinfoma(state) { return state.userinfoma },

    getuserid(state) { return state.userid },
    getAll(state) { return [state.islog, state.currentUser, state.userfullname, state.userinfoma] }
  },
  mutations: {
    logon(state, value) {
      localStorage.setItem('uid', value.id)
      localStorage.setItem('fullname', value.fullname)
      localStorage.setItem('token', value.token);
      localStorage.setItem('islogin', value.suc);
      
      this.commit('update')
      // state.islog = true
      // state.currentUser = value.name
      // state.userfullname = value.fullname
      // state.userinfoma = value.infoma
      // state.userid = value.id
      // if(this.$store.getters.isLoggedIn){
      //   alert(state.currentUser+' has logon')
      // }else{
      //   alert('suck')
      // }  
    },
    logout() {
      localStorage.setItem('uid', '')
      localStorage.setItem('fullname', '')

      this.commit('update')
    },
    update(state) {
      state.token = localStorage.getItem('token') || '',
      state.islog = localStorage.getItem('islogin') || false,
      state.userid = localStorage.getItem('uid') || '',
      state.userfullname = localStorage.getItem('fullname') || ''
    },
    setcount: (state, value) => state.count = value,
  },
  actions: {
    authen(context, value) { context.commit('logon', value) },
    deluser(context) { context.commit('logout') },
    set(context) {
      context.commit('setcount', this.getters.getcount + 1)
    },
  },
  modules: {
  }
})
