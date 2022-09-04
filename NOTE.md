获取服务器数据：解决跨域问题
    jsonp、cross、代理服务器

函数的防抖与节流（重点）

三级联动组件的路由跳转与传递参数
    1 路由跳转：
        声明式导航：router-link
        编程式导航：push | replace
    2 router-link：是一个组件，当服务器数据返回时，循环出许多的router-link组件实例对象，占用大量内存，出现卡顿
    3 解决方案：编程式导航 + 事件委派 （把所有子节点的事件委派给父节点）
        子结点中a标签加上自定义属性 data-categoryName
        
Search模块TypeNav商品分类菜单（过渡动画效果）
    1 前提 组件 | 元素有 v-if | v-show指令
        
优化三级列表
    1 在App根组件中发请求【根组件mounted】执行一次

合并params和query参数

开发Home首页当中的ListContainer组件和Floor组件
    1 服务器返回的数据只有商品分类菜单数据，其他组件数据服务器未提供
    2 mock数据（模拟）：应用mockjs插件
        1)在src文件夹中创建mock文件夹
        2)准备json数据：mock文件夹中创建相应的json文件,需要格式化
        3)mock需要的图片放置在public文件夹中【public文件夹在打包时，会把相应的资源原封不动打包到dist文件夹】
        4)创建mockServe.js,实现模拟数据
        5)mockServe.js文件在入口文件中引入
        