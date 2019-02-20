var express = require("express");
var app = express();
const port = 3000;
// CORS解决跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header("Access-Control-Max-Age", 1728000);
  next();
});

app.get("/getData", (req, res) => {
  res.send("已获取到后端数据了！");
});

app.listen(port, function () {
  console.log("server is on port " + port);
})