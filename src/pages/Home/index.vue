<template>
    <div>
        <!-- 三级联动全局组件，已经注册为全局组件，不需要再引入 --> 
        <TypeNav/>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Floor/>
        <Brand/>
        <!-- <button>点我+1</button>
        <hr>
        <span>仓库的数据：</span>
        <hr>
        <button>点我-1</button> -->
    </div>
</template>

<script>
    //引入其余组件
    import ListContainer from "@/pages/Home/ListContainter"
    import TodayRecommend from "@/pages/Home/TodayRecommend"
    import Rank from "@/pages/Home/Rank"
    import Like from "@/pages/Home/Like"
    import Floor from "@/pages/Home/Floor"
    import Brand from "@/pages/Home/Brand"
    import { mapState } from "vuex"
   
    export default {
        name: "",
        components:{
            ListContainer,
            TodayRecommend,
            Rank,
            Like,
            Floor,
            Brand
        },
        computed:{
            ...mapState(['count'])
        }
    }
</script>

<style scoped>

</style>