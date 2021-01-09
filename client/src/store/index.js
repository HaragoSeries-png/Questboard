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
    userinfoma: '',
  },
  getters: {
    getTitle(state) { return state.title},

    isLoggedIn(state) { return state.islog },
    getusername(state) { return state.currentUser },
    getcount(state) { return state.count },
    getinfoma(state) { return state.userinfoma }
  },
  mutations: {
    setTitle(state, value) { state.title = value + " | " + state.comptitle},

    logon(state, value) {
      state.currentUser = value.name
      localStorage.setItem('token', value.token);
      localStorage.setItem('islogin', value.suc);
      state.islog = true
      state.userinfoma = value.infoma
      console.log("logon")
      // if(this.$store.getters.isLoggedIn){
      //   alert(state.currentUser+' has logon')
      // }else{
      //   alert('suck')
      // }  
    },
    logout(state, value) {
      state.currentUser = value
      state.islog = false
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
