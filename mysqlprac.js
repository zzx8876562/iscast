// 1. 导包
const mysql = require('mysql');
// 2. 配置
const connection = mysql.createConnection({
    // 主机
    host: 'localhost',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名字
    database: 'msg58'
});

// 3. 开启连接
connection.connect();

// 4. 执行sql语句
// connection.query('SELECT 1 + 1 AS solution', function(error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });


// 查询
// results 数组 [{}]
// 在sql语句中 可以写? 占了一个位置 此时 相当于函数的形参
// ?是mysql包给我们提供
// 当sql中 多个?时  query方法第二个参数[第一个?的值,第二个?的值.....]
// const sqlstr = 'SELECT *FROM `posts`';
// const ID = 1;
// const sqlstr = 'SELECT *FROM `posts` WHERE id = ?';

// const name = "abc";
// const content = "ss";

// const sqlstr = 'SELECT *FROM `posts` WHERE name = ? AND content=?';

// connection.query(sqlstr, [name, content], function(error, results) {
//     if (error) throw error;
//     console.log(results);
// });

// 插入/添加数据
// const item = {
//     name: 'suibianxie',
//     content: 'haolihai',
//     mail: 'youxiang@11.com',
//     date: '2014-10-30'
// };
// // set name="" content="" mail="" date=""
// const sqlstr = 'INSERT INTO `posts` SET ?';
// connection.query(sqlstr, item, (err, results) => {
//     console.log(results);
// });

// 修改/更新
// 修改id=1的数据 把name="xxxx";

// const ID = 1;
// const name = "xxxx";

// const sqlstr = 'UPDATE `posts` SET name = ? WHERE id = ?';
// connection.query(sqlstr, [name, ID], (err, results) => {
//     console.log(results);

// });

// 删除
// const ID = 257;
// const sqlstr = 'DELETE FROM `posts` WHERE id = ?';
// connection.query(sqlstr, [ID], (err, results) => {
//     console.log(results);
// });

// 5. 关闭数据库
connection.end();