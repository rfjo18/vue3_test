/*
Y
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el) {
        // 聚焦元素
        el.focus()
    }
})
*/

export default {
    install(app){
        app.directive('focus', {
            // 指令是具有一组生命周期的钩子：
            // 在绑定元素的 attribute 或事件监听器被应用之前调用
            created(el,binding,vnode,prevNnode) {},
            // 在绑定元素的父组件挂载之前调用
            beforeMount(el,binding,vnode,prevNnode) {},
            // 绑定元素的父组件被挂载时调用
            mounted(el,binding,vnode,prevNnode) {
                // 聚焦元素
                //el.focus()
                let div=null;
                el.addEventListener('mousedown',function(e){
                    console.log(e.offsetX,e.offsetY)
                    e.target.style.position="relative";
                    div=document.createElement('div');
                    div.style=`width:10px;height:10px;position:absolute;left:${e.offsetX-5}px;top:${e.offsetY-5}px;
                background:#E3E3E3;border-radius:10px;z-index:0`;

                    this.appendChild(div)
                },false)

                el.addEventListener('mouseup',function(e){
                    //this.parentNode.removeChild(this);
                    this.removeChild(div)
                    div=null;
                },false)

                /* var styleSheets = document.styleSheets[0];  //获取样式表引用
                 var index = styleSheets.length;  //获取样式表中包含样式的个数
                 if(styleSheets.insertRule){  //判断浏览器是否支持insertRule()方法
                     //使用insertRule()方法在文档内部样式表中增加一个p标签选择符的样式，设置段落背景色为红色，字体颜色为白色，补白为一个字体大小。插入位置在样式表的末尾，
                     styleSheets.insertRule("p{background-color:red;color:#fff;padding:1em;}", index);
                 }else{  //如果哦浏览器不支持insertRule()方法
                     styleSheets.addRule("P", "background-color:red;color:#fff;padding:1em;", index);
                 }*/
            },
            // 在包含组件的 VNode 更新之前调用
            beforeUpdate(el,binding,vnode,prevNnode) {},
            // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
            updated(el,binding,vnode,prevNnode) {},
            // 在绑定元素的父组件卸载之前调用
            beforeUnmount(el,binding,vnode,prevNnode) {},
            // 卸载绑定元素的父组件时调用
            unmounted(el,binding,vnode,prevNnode) {}
        })
    }

}
