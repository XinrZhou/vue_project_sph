# 项目笔记

## 获取服务器数据：解决跨域问题
1. jsonp、cross、代理服务器

## 函数的防抖与节流
1. 防抖：触发事件后，在n秒内函数只能执行一次，如果触发事件后在n秒内又触发了事件，则会重新计算函数延执行时间
* 需要一个setTimeout来辅助实现，延迟运行需要执行的代码。如果方法多次触发，则把上次记录的延迟执行代码用 clearTimeout 清掉，重新开始计时。若计时期间事件没有被重新触发，等延迟时间计时完毕，则执行目标代码
2. 节流：在一定时间之内，限制一个动作只执行一次
* 通过 setTimeout 定时器，通过设置延时时间，在第一次调用时，创建定时器，先设定一个变量，然后把定时器赋值给这个变量，再写入需要执行的函数。第二次执行这个函数时，会判断变量是否true，是则返回。当第一次的定时器执行完函数最后会设定变量为false。那么下次判断变量时则为false，函数会依次运行。


## 三级联动组件的路由跳转与传递参数
1. 路由跳转<br>
* 声明式导航：router-link<br>
* 编程式导航：push | replace<br>
2. router-link：是一个组件，当服务器数据返回时，循环出许多的router-link组件实例对象，占用大量内存，出现卡顿
3. 解决方案：编程式导航 + 事件委派 
* 把所有子节点的事件委派给父节点
* 子结点中a标签加上自定义属性 data-categoryName

## Search模块TypeNav商品分类菜单（过渡动画效果）
1. 前提 组件|元素有 v-if|v-show指令

## 优化三级列表   
1. 在App根组件中发请求【根组件mounted】执行一次       

## 合并params和query参数

## 开发Home首页当中的ListContainer组件和Floor组件
1. 服务器返回的数据只有商品分类菜单数据，其他组件数据服务器未提供
2. mock数据（模拟）：应用mockjs插件
* 在src文件夹中创建mock文件夹
* 准备json数据：mock文件夹中创建相应的json文件,需要格式化
* mock需要的图片放置在public文件夹中【public文件夹在打包时，会把相应的资源原封不动打包到dist文件夹】
* 创建mockServe.js,实现模拟数据
* mockServe.js文件在入口文件中引入

## ListContainer开发的重点：安装Swiper插件swiper@5
1. npm install --save swiper@5
2. swiper插件：经常制作轮播图（移动端|PC端都能使用）
3. mounted：组件挂载完毕，正常情况组件结构（DOM）全有了，但在此案例中结构还未完整
4. 完美解决方案：watch + nextTick
5. $nextTick:当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行(Vue官网)
6. $nextTick：可以保证页面中的结构一定是有的

## 开发floor组件
1. Vue中不直接操作DOM，使用ref为子组件指定一个引用ID
* ref用在普通DOM元素上，引用指向的是DOM元素，用在子组件上，引用指向组件实例
* 使用方式：this.$refs.XXX
2. 仓库中state数据格式，取决于服务器返回数据格式
3. getFloorList这个action在Home路由组件中触发，因为需要v-for遍历floor组件
4. 组件间通信的方式（面试频率高）
* props：用于父子组件通信
* 自定义事件：$on $emit：实现子给父通信
* 全局事件总线：$bus 
* 消息的订阅预发布：pubsub-js(Vue中几乎不用)
* 插槽
* Vuex
5. 本次在floor组件外发请求，父组件通过props将完整请求数据传给floor组件，因此可以在mounted中用轮播图

## 拆分轮播图为全局组件（若一个组件多次使用，可拆分为全局组件）

## Search模块开发
1. 步骤：静态页面 -> 拆分组件 -> 发请求（API）-> vuex（三连环） -> 组件获取仓库数据，动态展示数据
2. mapGetters里的写法：传递数组，因为getters计算没有划分模块

## 动态开发面包屑中的关键字
1. 面包屑中的关键字清除后，需要让Header组件中的关键字清除（组件通信）
* props/自定义事件/插槽：父子
* vuex/pubsub-js：万能
* $bus：全局事件总线

## 数组去重
1. 判断(e.g.)
```
if(this.searchParams.props.indexOf(props)==-1){
  this.searchParams.props.push(props
})
```

## 排序操作
1. 类名：通过order属性当中是否包含1（综合）|2（价格）
2. 箭头: 谁有类名，谁有箭头
3. 箭头制作：阿里图标库

## 分页功能实现
1. 若平台展示数据很多，不使用分页会产生卡顿
2. 分页器需要哪些数据
* pageNo：代表当前是第几页
* pageSize：每一个展示多少条数据
* total：分页器总共有多少条数据
* continues：分页器连续页码个数(5|7)
3. 对分页器而言，算出连续页面起始位置数字很重要

## 某一个产品的详情页
1. 静态组件注册为路由组件
* 当点击商品图片时，跳转到详情页，在路由跳转时带上产品的ID
* 滚动行为：参考vue官方文档
```
https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
```
2. API:请求接口
3. Vuex:获取产品详情信息

## 放大镜
1. mask: CSS 属性 mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域
2. 几个API
* clinetX: 鼠标指针位置相对于当前窗口的 x 坐标
* clientY: 鼠标指针位置相对于当前窗口的 y 坐标
* offsetX: 鼠标指针位置相对于触发事件的对象的 x 坐标
* offsetY: 鼠标指针位置相对于触发事件的对象的 y 坐标
* screenX: 鼠标指针位置相对于用户屏幕的 x 坐标
* screenY: 鼠标指针位置相对于用户屏幕的 y 坐标
* HTMLElement.offsetWidth: 返回一个元素的布局宽度
* HTMLElement.offsetHeight: 返回一个元素的布局高度





        