const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// 小程序配置
const config = {
  appid: '', //小程序id
  secret: '', //小程序秘钥
  grant_type: 'authorization_code'
}
// 传输的数据
let data = {};

app.post('/get_openid', (req, res) => {
  let {
    code
  } = req.body;
  axios.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: config.appid,
        secret: config.secret,
        js_code: code,
        grant_type: config.grant_type
      }
    })
    .then((res) => {
      console.log(res.data);
      data = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  res.send({
    openid: data.openid
  })
})

app.listen(3000, () => {
  console.log("start")
})
