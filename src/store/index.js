import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state:仓库存储数据的地方
const state = {
    count:1,
}
//mutations:修改state的唯一手段
const mutations = {}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步u
const actions = {}
//getters:理解为计算属性,用于简化数据仓库
const getters = {}

//对外暴露store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})