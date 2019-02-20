var express = require("express");
var app = express();
const port = 3000;

app.get("/getData", (req, res) => {
  res.send("已获取到后端数据了！");
});

app.listen(port, function () {
  console.log("server is on port " + port);
})