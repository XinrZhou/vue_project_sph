<template>
    <div class="type-nav">
        <div class="container">
            <!-- 事件委派|事件代理 -->
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <!-- 过渡动画 -->
                <transition name="sort">
                    <!-- 三级联动 -->
                    <div class="sort" v-show="show">
                        <!-- 利用编程式导航 + 事件委派实现路由的跳转与传递参数 -->
                        <div class="all-sort-list2"  @click="goSearch">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex===index}">
                                <h3 @mouseenter="changeIndex(index)" >
                                    <a 
                                    :data-categoryName="c1.categoryName"
                                    :data-category1Id="c1.categoryId"
                                    >
                                        {{c1.categoryName}}
                                    </a>
                                </h3>
                                <!-- 二级、三级分类 -->
                                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                    <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a 
                                                :data-categoryName="c2.categoryName"
                                                :data-category2Id="c2.categoryId"
                                                >
                                                    {{c2.categoryName}}
                                                </a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a 
                                                    :data-categoryName="c3.categoryName"
                                                    :data-category3Id="c3.categoryId"
                                                    >
                                                        {{c3.categoryName}}
                                                    </a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    //引入lodash全部的功能函数（不推荐）
    // import _ from 'lodash'
    //按需引入
    import throttle from 'lodash/throttle'

    export default {
        name:'TypeNav',
        data(){
            return {
                //存储用户鼠标移上哪个一级分类
                currentIndex:-1,
                show:true
            }
        },
        //组件挂载完毕，可以向服务器发请求
        mounted() {
            //若为search组件，将TypeNav隐藏，挂载完毕，让show属性变为false
            if(this.$route.path!='/home'){
                this.show = false
            } 
        },
        computed:{
            //对象写法右侧需要的是一个函数，当使用这个计算属性时，右侧函数会立执行一次
            //注入一个参数state，即为大仓库中的数据
            ...mapState({
                categoryList:state=>state.home.categoryList
            })
        },
        methods: {
            //鼠标进入修改响应式数据currentIndex属性(ES5写法)
            //thrott别用箭头函数，可能出现上下文this指向错误
            changeIndex:throttle(function(index){
                // index:鼠标移上某一个一级分类元素的索引值
                // 由于用户行为过快，导致浏览器反应不过来，若回调中有大量业务，有可能出现卡顿现象
                this.currentIndex = index
            },50),
            goSearch(event){
                //获取到当前触发事件的节点
                let element = event.target
                //节点的dataset属性，可以获取节点的自定义属性值
                let { categoryname,category1id,category2id,category3id} = element.dataset
                //a标签才会进入
                if(categoryname){
                    //整理路由跳转的参数
                    let location = {name:'search'}
                    let query = {categoryName:categoryname}
                    //区分哪级分类的a标签
                    if(category1id){
                        query.category1Id = category1id
                    }else if(category2id){
                        query.category2Id = category2id
                    }else{
                        query.category3Id = category3id
                    }
                    //整理完参数(合并location和query对象) +路由跳转 
                    if(this.$route.params){
                        location.params = this.$route.params
                        location.query = query
                        this.$router.push(location)
                    }
                }
            },
            //鼠标进入时，商品分类列表进行展示
            enterShow(){
                this.show = true
            },
            //鼠标移除时，商品分类列表进行隐藏
            leaveShow(){
                this.currentIndex = -1
                if(this.$route.path != '/home'){
                    this.show = false
                }
            },
    }
}
</script>

<style lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                    }
                    .cur{
                        background-color: skyblue;
                    }
                }
            }

            /* 过渡动画的样式 */
            /* 开始状态（进入）  */
            .sort-enter {
                height: 0px;
            }
            /* 结束状态（进入） */
            .sort-enter-to {
                height: 461px;
            }
            /* 定义动画时间、速率 */
            .sort-enter-active {
                transition: all .5s linear;
            }
        }
    }
</style>