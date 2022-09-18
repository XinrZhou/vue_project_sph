//对api进行统一管理
import requests from "./ajax"
import mockAjax from './mockAjax'

//三级联动接口
//发请求:axios发请求结果返回Promise对象
export const reqCategoryList = ()=>requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockAjax.get('/banner')

//获取floor数据
export const reqFloorList = ()=>mockAjax.get('/floor')

//获取搜索模块数据
//当前这个接口，给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
})

//获取产品详情信息的接口 URL：/api/item/{skuId} 请求方式：GET
export const reqGoodsInfo = (skuid)=>requests({
    url:`/item/${skuid}`,
    method:'get'
})

//将产品添加到购物车中（获取更新某个产品的个数）
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
})

//获取购物车列表数据接口
export const reqCartList = ()=>requests({
    url:'/cart/cartList',
    method:'get'
})

//删除购物车商品
export const reqDeleteCartById = (skuId)=>requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
})

//切换商品选中状态
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
})

//获取验证码
export const reqGetCode = (phone)=>requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
})

//注册
export const reqUserRegister = (data)=>requests({
    url:'/user/passport/register',
    data,
    method:'post'
})

//登录
export const reqUserLogin = (data)=>requests({
    url:'/user/passport/login',
    data,
    method:'post'
})

//获取用户信息【携带token】
export const reqUserInfo = ()=>requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
})

//退出登录
export const reqLogout = ()=>requests({
    url:'/user/passport/logout',
    method:'get'
})

//获取用户地址信息
export const reqAddressInfo = ()=>requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})

//获取商品清单
export const reqOrderInfo = ()=>requests({
    url:'/order/auth/trade',
    method:'get'
})

//提交订单
export const reqSubmitOrder = (tradeNo,data)=>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:'post'
})

//获取支付信息
export const reqPayInfo = (orderId)=>requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})