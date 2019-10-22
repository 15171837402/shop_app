<template>
    <div class="tab-bar-item" @click="ItemClick">
        <slot name="item-icon"/>
        <div :style="isSelect">
            <slot name="item-text"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:"red"
            }
        },
        computed:{
            is(){
                return this.$route.path.indexOf(this.path)!=-1;
            },
            isSelect(){

               return this.is?{color:this.activeColor}:{};
            }
        },
        methods:{
            ItemClick(){
                // this.$router.replace(this.path);
                if(!this.is){
                    this.$router.replace(this.path);
                }
            }

        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        font-size: 14px;
    }
    .tab-bar-item>img{
        width: 23px;
        margin-top: 5px;
        height: 23px;
        vertical-align: middle;
    }
</style>