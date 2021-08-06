/*
*  https://next.vuex.vuejs.org/zh/index.html
* */
import { createStore } from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import localStorage from './localStorage'


export default createStore({
    plugins: [/*createPersistedState({
        key:'vite'
    })*/localStorage],
    state () {
        return {
            count: 0,
            list: [{name:1}],
        }
    },
    mutations: {
        increment (state,info) {
            state.count=info
        }
    }
})
