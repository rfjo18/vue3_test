// Vue Router 4  https://next.router.vuejs.org/zh/index.html
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Pdf from '../views/Pdf.vue'


const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            children:[
                {
                    path: '/about',
                    component: About,
                }
            ]
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/pdf',
            component: Pdf,
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