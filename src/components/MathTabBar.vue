<template>
    <tab-bar>
        <tab-bar-item path="/home" acitve-color="red">
            <img slot="item-icon" src="~@/assets/imgs/ooopic_1571412081.png">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" acitve-color="red">
            <img slot="item-icon" src="../assets/imgs/ooopic_1571412101.png">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" acitve-color="red">
            <img slot="item-icon" src="../assets/imgs/ooopic_1571412117.png">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" acitve-color="red">
            <img slot="item-icon" src="../assets/imgs/ooopic_1571412130.png">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBarItem from "@/components/tabbar/TabBarItem";
    import TabBar from "@/components/tabbar/TabBar";
    export default {
        name: "MathTabBar",
        components:{
            TabBar, TabBarItem
        }
    }
</script>

<style scoped>

</style>