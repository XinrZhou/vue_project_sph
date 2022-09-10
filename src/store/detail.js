import { reqGoodsInfo } from "@/api"

const state = {
    goodsInfo:{}
}
const mutations = {
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}
const actions = {
    async getGoodsInfo({commit},skuid){
        let result = await reqGoodsInfo(skuid)
        if(result.code == 200){
            commit('GETGOODSINFO',result.data)
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||{}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}