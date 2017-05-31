/*
    登录接口
*/
let userDb = require('../../../database/account/login.db.js');
let message = require('../../common/msg_creater.js');
module.exports = function(req,res){
    var reqData = req.body;
    console.log('服务器收到消息:',reqData);
    userDb(reqData).then(function(data){
        console.log('查询结果',data,"length:",data.length);
        if(data.length == 1){
            checkAccount(reqData,data[0],req,res);
        }else if(data.length > 1){
            res.send(message.error_msg(10001,'数据库错误 错误代号'));
        }else if(data.length == 0){
            res.send(message.error_msg(20001,'用户未注册'));
        }
        res.end();
    },function(err){
        res.end();
    });
}

function checkAccount(reqData,dbData,req,res){
  console.log(reqData.password,dbData.password)
    //比对密码
    if(reqData.password == dbData.password){
        res.send(message.success_msg('登录成功',{}));
    }else{
        res.send(message.error_msg(20000,'密码错误'));
    }
}
