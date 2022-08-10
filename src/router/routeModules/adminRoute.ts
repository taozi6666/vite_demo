
const Home = () => import('@/pages/home/index.vue');
const Login = () => import('@/pages/login/index.vue');

export const adminRoute = [
    // {
    //   path: "/admin",
    //   name: "admin",
    //   component: ()=>import("@/views/admin/index.vue"),
    //   children: [
    //     // 列表页面
    //     {
    //       path:"lists", // 注意，子路由的开头位置，不要加 / 路径符
    //       name:"adminLists",
    //       component: ()=>import("@/views/admin/lists/lists.vue"),
    //     },
    //     // 详情页面
    //     {
    //       path:"details",
    //       name:"adminDetails",
    //       component: ()=>import("@/views/admin/details/details.vue"),
    //     }
    //   ]
    // }
    {
     path:"/",
     redirect:'/home'
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    }
]