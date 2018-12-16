
  //链接数据库
  const mysql = require('mysql');
// 2. 配置
const connection = mysql.createConnection({
    // 主机
    host: 'localhost',
    // 用户名
    user: 'root',
    // 密码
    password: 'root',
    // 数据库名字
    database: 'itcast'
});

// 3. 开启连接
connection.connect();

//渲染登陆页
  exports.login=(req,res)=>{
      res.render('signin.html');
  }
  //res
  let sqlstr="select *from `user` where email=?";
  //执行数据库语句
  connection.query(sqlstr,(err,data)=>{

  })
  //处理数据
 
  // 5. 关闭数据库
connection.end();