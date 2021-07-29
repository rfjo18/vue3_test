import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'amfe-flexible'  //适配
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
