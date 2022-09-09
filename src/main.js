import Vue from 'vue'
import App from './App.vue'

//定义全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

//第一个参数：全局组件的名字，第二个组件：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)


//引入路由
import router from '@/router'
//引入仓库
import store from "@/store"
//引入mockServe.js
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
import {reqGetSearchInfo} from '@/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由信息
  router,
  //注册仓库:组件实例的身上多了$store属性
  store
}).$mount('#app')
