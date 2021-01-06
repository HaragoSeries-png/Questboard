import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token')||'',
    currentUser:'',
    count:0,
    islog:false
  },
  getters:{
    isLoggedIn(state){return state.islog},
    getusername(state){return state.currentUser},
    getcount(state){return state.count},
    getUserData(){
      let b = {name: 'Kittisak', lastname: 'Sangkarak'}
      // console.log("B:" + b.name)
      return b
    }
  },
  mutations: {
    logon(state,value){
      state.currentUser =value
      state.islog=true
      // if(this.$store.getters.isLoggedIn){
      //   alert(state.currentUser+' has logon')
      // }else{
      //   alert('suck')
      // }  
    },
    logout(state,value){
      state.currentUser =value
      state.islog=false
    },
    setcount:(state,value)=>state.count=value,
  },
  actions: {
    authen(context,value){context.commit('logon',value)},
    deluser(context){context.commit('logout','')},
    set(context){
      context.commit('setcount',this.getters.getcount+1)
    },
    profile(){
      let c = {name: 'Kittisak', lastname: 'Sangkarak'}
      return c
    }
  },
  modules: {
  }
})
