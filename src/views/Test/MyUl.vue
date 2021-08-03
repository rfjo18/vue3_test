<template>
    <ul>
        <slot :user="user">默认值</slot>
    </ul>
</template>

<script>
export default {
    name: "MyUl",
    components: {},
    data() {
        return {
            user:'asd'
        }
    },
    computed: {},
    created() {

    },
    mounted(){
        //console.dir(this)
        //console.dir(this.$slots.default)

        console.log(this)

    },
    methods: {
        esProxyReflect(){
            let xiaohong = {
                name: "小红",
                age: 15
            };
            xiaohong = new Proxy(xiaohong, {
                get(target, key) {
                    let result = target[key];
                    //如果是获取 年龄 属性，则添加 岁字
                    if (key === "age") result += "岁";
                    return result;
                },
                set(target, key, value) {
                    if (key === "age" && typeof value !== "number") {
                        throw Error("age字段必须为Number类型");
                    }
                    console.log(22)
                    target[key] = value;
                    return Reflect.set(target, key, value);
                }
            });
            console.log(xiaohong)
            console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);
            xiaohong.age = 12;
            console.log(xiaohong)
        }
    }
}
</script>

<style scoped>

</style>
