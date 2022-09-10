import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

//使用插件
Vue.use(VueRouter)

//先把vueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//重写push|replace
//第一个参数：告诉原来的push方法，跳转位置、传递参数
//第二个参数：成功回调
//第三个参数：失败回调
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call与apply区别
        //相同点：都可以调用函数、篡改函数的上下文一次
        //区别：call传递参数用逗号隔开，apply方法传递数组
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{}) 
    }
}

//配置路由
export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // y=0，代表滚动条在最上方
        return { y: 0 }
      },
})
