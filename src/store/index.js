/*
*  https://next.vuex.vuejs.org/zh/index.html
* */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


export default createStore({
    plugins: [createPersistedState({
        key:'vite'
    })],
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state,info) {
            state.count=info
        }
    }
})