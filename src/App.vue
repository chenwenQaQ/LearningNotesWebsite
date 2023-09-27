<script>
// 从本地文件导入名为Home的组件
import Home from "./components/AppHome.vue"
// 导出所创建的App组件
export default {
  // 设置自定义组件名称为App
  name: "App",
  // 注册Home组件，即定义该组件中使用哪些其他组件
  components:{
    // 将导入的Home组件注册为App组件的子组件
    Home:Home
  }
}
</script>
<template>
  <!-- 在模板中使用Home组件 -->
  <Home></Home>
</template>
