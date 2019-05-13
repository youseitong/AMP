var express = require('express');
var router = express.Router();

//引入连接模块
const connection = require('./conn');

connection.connect(() => {
  console.log('数据库连接成功！')
});

//接受请求
router.post('/checklogin', (req, res) => {

  let { username, password } = req.body;
  // console.log(username, password);
  // res.send('qwe')
  //查询数据库
  // const sqlstr="select * from users where username='${username}' and password='${password}' ";
  const sqlstr=`select * from users where username='${username}'and password='${password}'`
  connection.query(sqlstr,(err,data)=>{
    if(err){
      throw err;     
    }
    else{
      res.send(data);
    }
  })
})

module.exports = router;
