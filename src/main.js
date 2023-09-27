// 导入组件库
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 通过createApp函数创建一个应用实例即根组件
const app = createApp(App)
// 遍历ElementPlusIconsVue中的所有组件进行注册，将图标挂载到全局
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    // 向app应用实例中全局注册图标组件
    app.component(key,component)
}
app.use(ElementPlus)
// 将应用实例挂载到id名为app的DOM元素上
app.mount('#app')
