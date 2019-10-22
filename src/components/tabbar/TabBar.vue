<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    import TabBarItem from "@/components/tabbar/TabBarItem";
    export default {
        name: "TabBar",

        components:{
            // eslint-disable-next-line vue/no-unused-components
            TabBarItem
        }


    }
</script>

<style scoped>
    #tab-bar{
        display: flex;
        text-align: center;
        height: 49px;
        background-color: #f6f6f6;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
    }

</style>