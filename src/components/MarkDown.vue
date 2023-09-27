<script>
// 导入组件库
import{ marked } from 'marked';
// 导出所创建的MarkDown组件
export default {
    // 设置外部属性，即从组件外接受所传递进来的参数
    props:["content"],
    computed:{
        // 在组件渲染时，将this.content中的Markdown文本转换为HTML，并将结果保存在data属性中
        data(){
            return marked(this.content)
        }
    }
}
</script>
<template>
    <!-- 将data属性中的值作为HTML内容动态渲染页面 -->
    <p v-html="data"></p>
</template>