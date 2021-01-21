import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/Users';
import Profile from './modules/Profile';


Vue.use(Vuex)

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

  }
})
