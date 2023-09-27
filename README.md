# 该项目为使用Vue3技术搭建一个小型的学习笔记网站

## 项目搭建
1.使用'npm create vue@latest'命令来创建Vue3项目
-------------
2.加载后会出现如TypeScript和测试支持之类的可选功能提示
    ✔ Project name: … <此处填写你项目的名字，如vue-study>
    ✔ Add TypeScript? … No / Yes
    ✔ Add JSX Support? … No / Yes
    ✔ Add Vue Router for Single Page Application development? … No / Yes
    ✔ Add Pinia for state management? … No / Yes
    ✔ Add Vitest for Unit testing? … No / Yes
    ✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
    ✔ Add ESLint for code quality? … No / Yes
    ✔ Add Prettier for code formatting? … No / Yes
    Scaffolding project in ./<your-project-name>...
    Done.
    本项目不需要任何可选功能，所以都选择No
-------------
3.安装依赖并启动开发服务器
    cd <your-project-name>
    npm install
    npm run dev
-------------
4.此时项目已经搭建完成，可以开始进行项目开发了

## 项目开发
安装项目所需要的其他依赖
    npm install element-plus --save (使用Element Plus组件库)
    npm install axios --save (使用Axios库)
    npm install @element-plus/icons --save (使用Element Plus图标库)
    npm install marked --save (使用Marked库)

## 项目结构
```
├─.vscode
│      extensions.json
├─node_modules
│
│─public
│  └─post
│      ├─HTML专题
│      │      HTML基础元素.md
│      │      文本标签.md
│      │      
│      └─JavaScript专题
│              方法与属性.md
│              语句与数据类型.md              
├─src
│   │  App.vue
│   │  main.js
│   │  
│   ├─components
│   │      AppBody.vue
│   │      AppHeader.vue
│   │      AppHome.vue
│   │      MarkDown.vue
│   │      
│   └─tools
│           FileManager.js
│ .gitignore
│ index.html
│ package-lock.json
│ package.json
│ README.md
└─vite.config.js
```