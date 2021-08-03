<template>
    <router-view></router-view>
</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
html,body{
    margin:0;
    padding:0;
    height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    height:100%;

}

// 过渡动画 横向渐变
   .fade-transverse-leave-active,
   .fade-transverse-enter-active {
       transition: all .5s;
   }
    .fade-transverse-enter {
        opacity: 0;
        transform: translateX(-30px);
    }
    .fade-transverse-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>
