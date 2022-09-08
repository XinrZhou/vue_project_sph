import { reqGetSearchInfo } from "@/api"
//search模块小仓库
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    //获取search模块数据
    async getSearchList({commit},params={}){
        //reqGetSearchInfo()这个函数在调用服务器数据时，至少传递一个参数（空对象）
        //params形参：当用户派发action的时候，第二个形参传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//计算属性，主要作用：简化仓库中的数据
const getters = {
    //state：当前仓库中的state，而非大仓库中state
    //网络正常，返回服务器数据；网络异常，返回空数组。避免出现undefined
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}