<template>
    <div id="app">
        <!--    顶部-->

        <!--    中部内容区-->
        <router-view></router-view>
        <!--    //底部-->
        <math-tab-bar></math-tab-bar>
        <!--    多级路由-->
<!--        <h4>底部导航</h4>-->
    </div>
</template>

<script>
    import MathTabBar from "./components/MathTabBar";
    export default {
        name: 'app',
        components: {
           MathTabBar
        },
    }
</script>

<style>

</style>
