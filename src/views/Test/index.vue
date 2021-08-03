<template>
    <div class="test_body">
        <MyUl>
            <MyLi></MyLi>
            <MyLi></MyLi>
        </MyUl>
    <el-select value="as">
        <el-option
            label="item.label"
            value="item.value">asd</el-option>
    </el-select>


    </div>
</template>

<script>
import MyUl from "./MyUl.vue";
import MyLi from "./MyLi.vue";

    export default {
        name: "Test",
        components: {MyUl,MyLi},
        data() {
            return {}
        },
        computed: {},
        created() {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .test_body{
        padding:20px;
    }
</style>
