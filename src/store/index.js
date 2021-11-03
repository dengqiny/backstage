import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局数据

  state: {
    index: localStorage.getItem('index') || 0,
    userdata: [],
    // 后端数据
    breads: [],
    shopId: '',
    loading: false,
    user: sessionStorage.getItem('v-user') ? JSON.parse(sessionStorage.getItem('v-user')) : {},
    id: ''
  },
  // 变异器
  mutations: {
    addid(state, step) {
      console.log('来到了了addid mutaions里面了')
      state.id = step
    },
    madd1(state, step) {
      state.index = step
      sessionStorage.setItem('index', step)
      sessionStorage.getItem('index')
    },
    // 获取点击编辑后的页面数据对应的id
    proshopId(state, step) {
      state.shopId = step
      localStorage.setItem('id', step)
      localStorage.getItem('id')
      console.log("进入到Id", state.shopId)
    },
    //       // 查找获取的数据
    addBread(state, step) {
      // 返回数据的下标
      const index = state.breads.findIndex(_bread => _bread.name === bread.name)

      // 判断i获取到的index
      if (index > -1) {
        // 截取内容
        state.breads.splice(index + 1, state.breads.length - index - 1)
      } else {
        // 添加内容
        state.breads.push(bread)
      }
    },
    // 删除数据
    removeBread(state, bread) {
      // 过滤数据
      state.breads = state.breads.filter(_bread => _bread !== bread)
    },
    // 存数据，将获取到的数据存入全局
    setUser(state, user) {
      state.user = user
      console.log(state.user)
    },
    // 变量存放
    changeloading(state, step) {
      console.log('changeloaing', step)
      state.loading = step
    }
  },
  // 异步数据存储
  actions: {},
  modules: {}
})
