//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSucess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

//路由配置信息
export default [
    {
        path:'/pay',
        component:Pay,
        meta:{show:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true}
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:"/addcartsuccess",
        name:'addcartsuccess',
        component:AddCartSucess,
        //路由元信息
        meta:{show:true}
    },
    {
        path:"/detail/:skuid",
        component:Detail,
        //路由元信息
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        //路由元信息
        meta:{show:true}
    },
    {
        name:"search",
        path:"/search/:keyword?",
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
