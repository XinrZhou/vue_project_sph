import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '@/api'

const state = {
    cartList:[]
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    },
    //删除购物车某一商品
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //修改购物车某一产品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code == 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //删除全部选中的商品
    deleteAllCheckedCart({dispatch,getters}){
        //获取购物车中全部的产品(数组)
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):''
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    //修改全部产品状态
    updateAllCartChecked({dispatch,state},isChecked){
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
    //计算出来的购物车数据
    cartInfoList(state){
        return 
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}
