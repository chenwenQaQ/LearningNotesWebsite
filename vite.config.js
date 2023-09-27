import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite配置网站https://vitejs.dev/config/
export default defineConfig({
  // 表示使用一个vue()插件，用于支持在Vite项目中使用Vue框架
  plugins: [
    vue(),
  ],
  // 表示配置了一个别名(alias)，将'@'映射为'./src'路径。这样，在项目中可以使用'@'来代替'./src'路径，方便引用项目中的文件
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 表示定义了一个全局变量'process.env.BASE_URL'，通常该值用于指定项目的基本URL路径，例如API请求的基础路径
  define: {
    'process.env': {
      'BASE_URL': "http://localhost:5173/public/"
    }
  }
})
