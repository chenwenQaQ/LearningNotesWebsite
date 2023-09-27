/**
 * `tools`文件夹用来存放一些JavaScript的工具文件，`FileManager.js`文件用来进行项目的数据配置工作
 */
// 导入组件库
import axios from "axios"
// 创建一个FileManager方法，用来进行项目的数据配置工作
const FileManager = {
    // 获取项目public文件夹下的post文件夹路径，其中process.env.BASE_URL表示当前应用的基本URL。通过使用基本URL和相对路径的组合，可以根据不同的环境动态地生成请求的URL，使得应用能够在不同环境下正常工作，而不需要手动修改URL。
    path:process.env.BASE_URL + "post/",
    // 设置getAllTopic方法，用来获取所有主题栏目
    getAllTopic:function(){
        return [
            "HTML专题",
            "JavaScript专题"
        ]
    },
    // 设置getPosts方法，用来获取某个主题栏目下的所有文章标题
    getPosts:function(topic){
        // 传入一个topic参数，根据参数返回相应的文章标题
        switch(topic){
            case 0:
                return ["文本标签","HTML基础元素"];
            case 1:
                return ["方法与属性","语句与数据类型"]
        }
    },
    // 设置getPostContent方法，用来获取某个文章的详细内容
    getPostContent:function(topicName,postName){
        // 获取详细文章内容的路径，topicName参数为文章专题名称，postName参数为文章标题名称
        let url = this.path + topicName + '/' +postName + '.md'
        // 创建一个新的Promise对象，其中res和rej分别表示Promise对象的resolve和reject函数
        return new Promise((res,rej) => {
            // 调用axios组件库的get方法，传入url参数，表示请求的URL，当请求成功返回时执行后续的回调函数，其中response参数表示请求返回的响应数据
            axios.get(url).then((response) => {
                // 调用resolve函数，并将响应数据作为参数传递给res
                res(response)
                // 当请求失败时调用reject函数，其中rej表示请求失败的原因
            },rej)
        })
    }
}
// 导出FileManager方法
export default FileManager