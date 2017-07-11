/*
    检查用户名可用性
*/
let userDb = require('../../../database/account/login.db.js');
let message = require('../../common/msg_creater.js');

module.exports = function(req,res){
    var reqData = req.body;
    if(!reqData.username){
        res.send(message.error_msg(20000,'username字段为空'));
    }
    userDb(reqData).then(function(data){
        // console.log('查询结果',data,"length:",data.length);
        if(data.length == 0){
            res.send(message.success_msg('账户未注册',{}));
        }else if(data.length >= 1){
            res.send(message.error_msg(10001,'账户已注册'));
        }
        res.end();
    },function(err){
        res.end();
    });
}
