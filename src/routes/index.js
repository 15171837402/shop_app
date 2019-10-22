import Vue from "vue"
import VueRouter from "vue-router"
let Home=()=>import("../views/home/Home");
let Category=()=>import("../views/category/Category");
let Cart=()=>import("../views/cart/Cart");
let Profile=()=>import("../views/profile/Profile");

Vue.use(VueRouter);

const routes=[
    {path: "",redirect:"/home"},
    {path: "/home",component:Home},
    {path: "/category",component:Category},
    {path: "/cart",component:Cart},
    {path: "/profile",component:Profile},
]
const router=new VueRouter({
    routes,
    mode:"history"
})
export default router