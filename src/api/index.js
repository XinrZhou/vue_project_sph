//对api进行统一管理
import requests from "./request";

//三级联动接口
//发请求:axios发请求结果返回Promise对象
export const reqCategoryList = ()=>requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })