
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
var proxy = require('http-proxy-middleware');
 
 
// 加载静态文件 打包好的静态文件放在dist下
app.use(express.static('./build'));
 
// 设置服务器代理，解决跨域问题
// target：目标地址
app.use('/api/*',proxy({    target:'https://m.weibo.cn/api',//代理域名或ip    
changeOrigin:true,    
pathRewrite:{
          '^/api':''    
}
})
)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
})
 
//监听端口
app.listen(80, (err) => {
  if (err) {
    console.log(err);
    return null;
  }
 
  return console.log('8080 port starting');
})

