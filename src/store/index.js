import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowRouter: null, // 当前路由
  },
  getters: {
    nowRouter: state => state.nowRouter,
  },
  mutations: {
    SET_NOW_ROUTER(state, data) {
      state.nowRouter = data
    },
  },
  actions: {},
  modules: {}
})