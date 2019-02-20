var express = require("express");
var app = express();
const port = 3000;


app.get('/jsonp',function(req,res,next){ 
  res.jsonp({data:'已通过jsonp获取到后端数据了！'}); 
  });

app.listen(port, function () {
  console.log("server is on port " + port);
})