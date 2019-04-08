# mpvue适配axios 说明

## 安装依赖
server端  
``` shell
cd server
npm i
```
前端  
``` shell
cd axios-adapter
npm i 
npm run dev
```
## 修改axios文件 

进入`axios-adapter/node_modules/axios/dist/axios.js`中，  
``` js
// 注释掉这段代码
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
```
``` js
// 添加
      axios.defaults.adapter = function (config) {
        return new Promise((resolve, reject) => {
          //  console.log(config)
          let data = config.method === 'get' ? config.params :
           JSON.stringify(JSON.parse(config.data))
          // wx小程序发起请求
          wx.request({
            url: config.url,
            method: config.method,
            data: data,
            success: (res) => {
              return resolve(res)
            },
            fail: (err) => {
              return reject(err)
            }
          })
        })
 ```
 ## 打开微信开发者工具查看效果
 
 使用微信开发者工具打开axios-adapter下的dist/wx项目，并在详情中勾选`不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书`  
 
 ## 搞定所有配置，在控制台可以查看效果

