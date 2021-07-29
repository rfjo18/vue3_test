<template>
    <h1 :class="[$style.h1]">登录</h1>

    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
            label="年龄"
            prop="age"
            :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
        >
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
    </el-form>
    <el-button @click="goRun">登录</el-button>
</template>

<script setup>
import {useRouter } from "vue-router"

  const router= useRouter();

    function goRun(){
        router.push('/')
    }


</script>

<style lang="scss" module>
    h1{
        color:green;
    }

</style>