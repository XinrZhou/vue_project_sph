import {reqCategoryList} from '@/api'
//home模块小仓库
const state = {
    //根据接口返回值初始化：服务器返回对象/数组
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    //通过api里的接口函数调用，向服务器发请求，获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    }
}
const getters = {
}

export default{
    state,
    mutations,
    actions,
    getters
}