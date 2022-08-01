import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    routes: [
        {
            path:"/home",
            component:Home,
            //路由元信息
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            name:"search",
            component:Search,
             //路由元信息
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
             //路由元信息
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
             //路由元信息
            meta:{show:false}
        },
        //重定向，在项目运行之后，访问/,立马定向到首页
        {
            path:'*',
            redirect:'/home'
        }
    ]

})
