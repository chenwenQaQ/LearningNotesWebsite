<script>
// 从本地文件中导入组件
import Header from "./AppHeader.vue"
import Body from "./AppBody.vue"
import FM from "../tools/FileManager.js"
// 导出所创建的AppHome组件
export default {
    // 注册Header和Body组件，即定义该组件中使用哪些其他组件
    components:{
        Header:Header,
        Body:Body
    },
    data(){
        return {
            // 调用getAllTopic方法获取所有主题栏目，并将其映射为一个新的数组navItems；使用map方法对数组进行遍历，并对数组中所指定的元素执行指定的操作
            navItems:FM.getAllTopic().map((item,id) => {
                // 所返回的数据模型navItems数组中每个元素都是一个包含下标（number）和专题名称(string)的对象
                return {
                    index:id,
                    title:item
                }
            }),
            // 设置网页底部的警示语
            desc: "版权所有，仅限学习使用，禁止传播！",
            // 设置当前所展示的专题
            currentTopicIndex:0
        }
    },
    methods:{
        // 点击切换专题时调用changeSelected方法
        changeSelected(index){
            // 将当前所点击的专题下标赋值给currentTopicIndex
            this.currentTopicIndex = index
        }
    },
    computed:{
        // 给bodyItems属性添加计算属性，当专题发生变化时，重新获取当前所要展示的文章标题列表
        bodyItems(){
            // 调用getPosts方法获取某个主题栏目下的所有文章标题，并将其映射为一个新的数组bodyItems；使用map方法对数组进行遍历，并对数组中所指定的元素执行指定的操作
            return FM.getPosts(this.currentTopicIndex).map((item,id) => {
                // 所返回的数据模型bodyItems数组中每个元素都是一个包含下标（number）和文章标题名称(string)的对象
                return {
                    index:id,
                    title:item
                }
            })
        }
    }
}
</script>
<template>
    <el-container id="container">
        <el-header style="width: 100%; height: 120px;">
            <!-- 调用Header组件，把'navItems'数据传递给组件中的'items'属性来渲染导航栏的选项，监听组件的selected事件并将其绑定到changeSelected方法上 -->
            <Header :items="navItems" @selected="changeSelected"></Header>
        </el-header>
        <el-main>
            <!-- 调用Body组件，将'bodyItems'数据传递给组件中的'items'属性来渲染侧边导航栏的选项，并将当前所指定的专题导航栏选项的文章专题名称传递给组件中的topic属性 -->
            <Body :items="bodyItems" :topic="navItems[currentTopicIndex].title"></Body>
        </el-main>
        <el-footer>
            <!-- 显示网页底部的警示语 -->
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>
<style scoped>
#container{
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 30px;
    height: 800px;
}
#footer{
    text-align: center;
    background-color: bisque;
    height: 40px;
    line-height: 40px;
    color: #717171;
}
</style>