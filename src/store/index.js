import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import loading from './modules/loading'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
     film,
    loading
  }
})
