
import { createRouter,createWebHistory } from 'vue-router'
// 引入的通用路由
import {adminRoute} from './routeModules/adminRoute'
 
// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。
    history: createWebHistory(),
    // 将通用路由和模块路由合并
    routes:[...adminRoute],
})

// 路由守卫
router.beforeEach((to,from,next)=>{
        if(to.name!='login'){
           const token = window.sessionStorage.getItem('token');
           if(token){
            next()
           }else{
            router.replace({path:'/login'});
           }
        }else if(to.name == 'login'){
            next();
        }
})



 
export default router