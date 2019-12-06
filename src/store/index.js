import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setList(state,payload){
      state.list=payload
    }
  },
  actions: {
    getList({commit}){
      axios.get("/list").then(({data})=>{
        commit("setList",data)
      },0)
    }
  },
  modules: {
  }
})
