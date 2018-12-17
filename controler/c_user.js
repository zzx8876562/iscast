
  //链接数据库
  const mysql = require('mysql');
// 2. 配置
const connection = mysql.createConnection({
    // 主机
    host: '127.0.0.1',
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
  exports.formSubmit=(req,res)=>{

    // res.send('//////');
    let body =req.body;
    console.log(body);
    let email=body.email;
    let password=body.password;

    //设置sql语句
    let sqlstr="select * from `users` where email=?";
    //执行sql语句
     connection.query(sqlstr,email,(err,result)=>{
       //处理结果
       if(err){
         throw err;
       }
       console.log(result);

      //  返回为一个数组  如果数组不为空 说明查询到了  验证emai
      //  数组为空说明 该账号不存在
       if(result.length==0){
        //  console.log(result);
           res.send({
             "code":'0',
             "meg":'该用户不存在'
           })
       }
       if(result[0].password!=password){
         return  res.send({
           "code":400,
           "msg":"密码错误"

         })
       }
       if(result[0].password==password){
         res.send({
           "code":200,
           "msg":'登录成功'
         })
       }
      // if(result.length!=0){
      //     res.send('账号正确');
      // }


     })
    // let sqlstr="select *from `user` where email=?";
    // //执行数据库语句
    // connection.query(sqlstr,(err,data)=>{
  
    // })
    // 处理数据
  }

 
  // 5. 关闭数据库
// connection.end();