// Vue Router 4  https://next.router.vuejs.org/zh/index.html
import { createRouter, createWebHistory } from "vue-router";

const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'index',
            component: () => import('../views/Home.vue'),
            children:[
                {
                    path: '/about',
                    name:'about',
                    component:() => import('../views/About.vue'),
                }
            ]
        },
        {
            path: '/login',
            name:'login',
            component:() => import('../views/Login.vue'),
        },
        {
            path: '/pdf',
            name:'pdf',
            component:() => import('../views/Pdf.vue'),
        },
        {
            path: '/test',
            name:'test',
            component:() => import('../views/Test/index.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name:'error',
            component:() => import('../components/404.vue'),
        },

    ]
})

/*
const ignoreRoutePathes = ['/login']
router.beforeEach((to, from, next) => {

    console.log(to)
    const toPath = to.path
    if (ignoreRoutePathes.indexOf(toPath) != -1) {
        next()
        return
    }

    next();
})
*/



export default router