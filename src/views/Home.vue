<template>
<!--    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>-->
    <el-menu :default-active="route.path" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/pdf">pdf</el-menu-item>
        <el-menu-item index="/test">test</el-menu-item>
    </el-menu>

    <router-view></router-view>
    <h1>home-----------vue3</h1>
    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click="clickmin">主要按钮1</el-button>
        <el-button type="success">成功按钮{{store.state.count}}</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger" @click="openWin">危险按钮</el-button>
    </el-row>

    <HelloWorld msg="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
</template>

<script setup>
import { ref,reactive  ,defineProps ,useSlots,useAttrs ,defineEmit , onMounted, onUpdated, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
    let props=defineProps({
        title: String
    })
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    const slots = useSlots();
    const attrs = useAttrs();
    const emit = defineEmit(['update', 'delete'])

    function clickmin(){
        store.commit('increment',store.state.count+12)
        router.push('/about')
    }
    function handleSelect(){
        console.log(router)
        console.log(route.path)

    }
    function openWin(){
        window.open ("http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf?title=name.pdf",
            "的标题的标题的标题的标题 的标题", )
    }
window.addEventListener('storage', function (e) {
   console.log(13)
   console.log(e)
}, false);
    onMounted(() => {
        console.log('mounted!')
    })
    onUpdated(() => {
        console.log('updated!')
    })
    onUnmounted(() => {
        console.log('unmounted!')
    })
</script>

<style lang="scss" scoped>

</style>