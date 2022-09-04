//对axios进行二次封装
import axios from "axios"
//引入进度条  start:进度条开始 done:进度条结束
import nprogress from "nprogress"
//引入进度条样式
import "nprogress/nprogress.css"

//利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    //基础路径，发请求时，路径中会出现api
    baseURL:"/api",
    //代表请求超时的时间5s
    timeout:5000,
})
//请求拦截器：再发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config)=>{
    //config:配置对象，属性中包括headers请求头
    //进度条开始动
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('fail'))
})

export default requests