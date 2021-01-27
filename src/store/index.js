import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/Users';
import Profile from './modules/Profile';
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)

const dataState = createPersistedState({
  paths:[''],
  modules: [''],
  storage: window.sessionStorage
})


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Users,
    Profile,
  },
  plugins: [dataState]
  
  
  
    
  })

