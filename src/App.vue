<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: "App",
    components: { Header, Footer },
    mounted() {
      //通知vuex发请求，获取数据，存储在仓库中
      this.$store.dispatch('categoryList')
    },
}
</script>

<style>
</style>
