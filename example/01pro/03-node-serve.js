// 引入Node.js中Http模块
const http = require('http')

//调用createServer创建服务器
http.createServer(function (req, res) {
    //发送Http头部
    //HTTP 状态值 200：ok
     // 内容类型: text/plain
    res.writeHead(200, { 'Content-Type': 'text/html' })
    //发送响应请求 hello world
   response.end('<h1>Hello Node.js Server</h1>')
    
}).listen(8080) //监听8080窗口
console.log('Server running at http://127.0.0.1:8888/')
