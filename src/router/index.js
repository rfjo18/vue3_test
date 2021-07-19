// Vue Router 4
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'


export default createRouter({
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
    ]
})