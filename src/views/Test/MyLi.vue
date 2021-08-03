<template>
    <li>
        li
    </li>
</template>

<script>
export default {
    name: "MyLi",
    components: {},
    data() {
        return {}
    },
    computed: {},
    created() {
        this.dispatch()
    },
    mounted(){
        console.dir(this)

    },
    methods: {
        dispatch(){
            const parent =this.$parent.$options.name;
            if(parent ==='MyUl'){

            }else{
                throw new Error('组件位置不对')
            }
        }
    }
}
</script>

<style scoped>

</style>
