//引入mockjs模块
import Mock from 'mockjs'
//引入json数据
//webpack默认对外暴露的：图片、json数据格式
import banner from './banner.json'
import floor from './floor.json'

//mock数据 参数1：请求地址 参数2：请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})