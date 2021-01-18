import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Questboard',

    token: localStorage.getItem('token') || '',
    currentUser: '',
    count: 0,
    islog: localStorage.getItem('islogin') || false,
    userfullname: localStorage.getItem('fullname') || '',
    userinfoma: '',
  },
  getters: {
    getTitle(state) { return state.title },

    isLoggedIn(state) { return state.islog },
    getusername(state) { return state.currentUser },
    getfullname(state) { return state.userfullname },
    getcount(state) { return state.count },
    getinfoma(state) { return state.userinfoma },

    getAll(state) {return [state.islog, state.currentUser, state.userfullname, state.userinfoma]}
  },
  mutations: {
    logon(state, value) {
      console.log(value.fullname)
      localStorage.setItem('fullname', value.fullname)
      localStorage.setItem('token', value.token);
      localStorage.setItem('islogin', value.suc);
      
      state.islog = true
      state.currentUser = value.name
      state.fullname = value.fullname
      state.userinfoma = value.infoma
      console.log("logon")
      // if(this.$store.getters.isLoggedIn){
      //   alert(state.currentUser+' has logon')
      // }else{
      //   alert('suck')
      // }  
    },
    logout(state, value) {
      localStorage.setItem('fullname', '')

      state.token = ''
      state.currentUser = value
      state.islog = false
      state.userfullname = ''
      state.userinfoma = '' 
    },
    setcount: (state, value) => state.count = value,
  },
  actions: {
    authen(context, value) { context.commit('logon', value) },
    deluser(context) { context.commit('logout', '') },
    set(context) {
      context.commit('setcount', this.getters.getcount + 1)
    },
  },
  modules: {
  }
})
