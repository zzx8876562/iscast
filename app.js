//导入包   配置包
const express = require("express");
const app = express();
// const router = require("./router");
const router=require('./router');
const bodyParser = require("body-parser");


app.engine("html", require("express-art-template"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//同意静态资源处理
app.use("/public", express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));

//挂载路由

app.use(router);

//监听录音
app.listen(3000, () => {
  console.log(" it  run");
});
