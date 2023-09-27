<script>
// 从本地文件中导入组件
import MarkDown from './MarkDown.vue'
import FM from "../tools/FileManager.js"
// 导出所创建的AppBody组件
export default {
    // 设置外部属性，即从组件外接受所传递进来的参数
    props:["items","topic"],
    // 当组件挂载完成时调用getPostContent方法来获取当前所要展示的详细文章内容
    mounted(){
        // 'this.topic'为AppHome父组件传递进来的文章专题名称参数，'this.items[this.currentIndex].title'为传递进来的文章标题名称参数
        FM.getPostContent(this.topic,this.items[this.currentIndex].title).then((res) => {
            // 若请求成功，则将请求到的文章内容赋值给'this.content'
            this.content = res.data
        })
    },
    data(){
        return {
            // 设置当前所展示的专题
            currentIndex:0,
            // 设置当前所展示的文章内容
            content:""
        }
    },
    // 注册MarkDown组件，即定义该组件中使用哪些其他组件
    components:{
        MarkDown:MarkDown
    },
    methods:{
        // 点击切换文章标题时调用selectItem方法
        selectItem(index){
            // 将当前所点击的文章标题下标赋值给currentIndex
            this.currentIndex = index
        }
    },
    // 监听'currentIndex'和'topic'属性
    watch:{
        // 当'currentIndex'属性发生变化时，调用getPostContent方法来获取当前所要展示的详细文章内容，即当用户点击文章列表中的某篇文章时就会更新当前所要展示的详细文章内容
        currentIndex:function(val){
            FM.getPostContent(this.topic,this.items[val].title).then((res) => {
                // 若请求成功，则将请求到的文章内容赋值给'this.content'
                this.content = res.data
            })
        },
        // 当'topic'属性发生变化时，调用getPostContent方法来获取当前所要展示的详细文章内容，即当用户点击专题导航栏内的选项时就会更新当前所要展示的详细文章内容
        topic:function(val){
            FM.getPostContent(val,this.items[this.currentIndex].title).then((res) => {
                // 若请求成功，则将请求到的文章内容赋值给'this.content'
                this.content = res.data
            })
        }
    }
}
</script>
<template>
    <el-container style="height: 100%;">
        <el-aside  style="background-color: #f1f1f1; width: 200px">
            <!-- mode="vertical"为菜单垂直排列；active-text-color为当前选中菜单项的文字颜色；:default-active="0"为默认选中的菜单项索引为0；@select="selectItem"为监听菜单项的选择事件并将其绑定到selectItem方法上 -->
            <el-menu
                model="vertical"
                background-color="f1f1f1"
                text-color="#777777"
                active-text-color="#000000"
                :default-active="0"
                @select="selectItem"
            >
                <!--从AppHome父组件中接受参数items数组，循环渲染数组中的每个元素，:index属性用于指定当前选项的索引，:key属性用于指定当前选项的唯一标识 -->
                <el-menu-item 
                    v-for="item in items"
                    :index="item.index"
                    :key="item.index"
                >
                    <!-- 渲染侧边导航栏中每个选项的标题 -->
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main style="padding: 20px;">
            <!-- 调用MarkDown组件，将'content'数据传递给组件中的'content'属性来渲染MarkDown内容 -->
            <MarkDown :content="content"></MarkDown>
        </el-main>
    </el-container>
</template>
<style scoped>
.el-menu-item.is-active {
    background-color: #ffffff !important;
}
</style>