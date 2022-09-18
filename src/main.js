import Vue from 'vue'
import App from './App.vue'

//定义全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui'

//第一个参数：全局组件的名字，第二个组件：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)

//引入路由
import router from '@/router'
//引入仓库
import store from "@/store"
//引入mockServe.js
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'

//统一接收api文件夹里的全部请求函数
import * as API from '@/api'

Vue.config.productionTip = false

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由信息
  router,
  //注册仓库:组件实例的身上多了$store属性
  store
}).$mount('#app')
