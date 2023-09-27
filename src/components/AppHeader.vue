<script>
// 导出所创建的AppHeader组件
export default {
    // 设置外部属性，即从组件外接受所传递进来的参数
    props:["items"],
    methods:{
        // 当调用selectItem方法时，会触发'selected'自定义事件并将index作为参数传递给父组件
        selectItem(index){
            // 通过内置的$emit方法可以在组件内部的某个特定事件发生时，将数据传递给父组件或其他监听该事件的组件，从而进行相应的处理或更新
            this.$emit("selected",index)
        }
    }
}
</script>
<template>
    <el-container>
        <el-header>
            <div id="title">Vue学习笔记</div>
        </el-header>
        <el-main style="margin: 0; padding: 0;">
            <!-- mode="horizontal"为菜单水平排列；active-text-color为当前选中菜单项的文字颜色；:default-active="0"为默认选中的菜单项索引为0；@select="selectItem"为监听菜单项的选择事件并将其绑定到selectItem方法上 -->
            <el-menu 
                mode="horizontal"
                background-color="e8e7e3"
                text-color="#777777"
                active-text-color="#000000"
                :default-active= "0"
                @select="selectItem"
            >
                <!--从AppHome父组件中接受参数items数组，循环渲染数组中的每个元素，:index属性用于指定当前选项的索引，:key属性用于指定当前选项的唯一标识 -->
                <el-menu-item 
                    v-for="item in items"
                    :index="item.index"
                    :key="item.index"
                >
                    <!-- 渲染专题导航栏中每个选项的标题 -->
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
            </el-menu>
        </el-main>
    </el-container>
</template>
<style scoped>
#title{
    color: brown;
    font-size: 40px;
    font-weight: 700;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#text{
    font-size: 20px;
}
</style>