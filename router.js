const express = require("express");
const router = express.Router();
const handle =require('./controler/c_user');

//配置路由
//渲染首页
router.get("/", handle.login);
//登录请求

module.exports = router;
