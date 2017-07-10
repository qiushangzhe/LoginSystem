/*
    登录接口
*/
let userDb = require('../../../database/account/login.db.js');
let message = require('../../common/msg_creater.js');
require('colors');
module.exports = function(req,res,next){
    var reqData = req.body;
    // console.log('服务器收到消息:',reqData);
    console.log(("session信息为"+JSON.stringify(req.session)).green);
    if(req.session.login_user != null){
        res.send('已登陆'+req.session.login_user);
        res.end();
        return;
    }
    // req.session.login_user = "qweqweqw";
    userDb(reqData).then(data => {
        // console.log('查询结果',data,"length:",data.length);
        if(data.length == 1){
            // checkAccount(reqData,data[0],req,res,next).bind(this);
            if(reqData.password == data[0].password){
                req.session.login_user = data[0].username;
                res.send(message.success_msg('登录成功',{}));

            }else{
                res.send(message.error_msg(20000,'密码错误'));
            }
        }else if(data.length > 1){
            res.send(message.error_msg(10001,'数据库错误 错误代号'));
        }else if(data.length == 0){
            res.send(message.error_msg(20001,'用户未注册'));
        }
        res.end();
    });
}

function checkAccount(reqData,dbData,req,res,next){
  console.log(reqData.password,dbData.password)
    //比对密码
    if(reqData.password == dbData.password){
        res.send(message.success_msg('登录成功',{}));
        req.session.login_user = dbData.username;
        // console.log(("session信息为"+JSON.stringify(req.session)).red);
        // console.log(JSON.stringify(req.cookies).yellow);
        // console.log(JSON.stringify(req.session).yellow);
    }else{
        res.send(message.error_msg(20000,'密码错误'));
    }
}


/*
function(data){
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
}

*/
