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
    appid: 'wxbb9a1a1aa2d6039e',
    secret: '4e611648d604efe064c3a8cf59f2e7eb',
    grant_type: 'authorization_code'
}
// 传输的数据
let data = {};

app.post('/login', (req, res) => {
    let {
        code,
        userName
    } = req.body;
    // axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${code}&grant_type=${config.grant_type}`)
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