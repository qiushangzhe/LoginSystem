/*
    账号注册接口
*/
let userDb = require('../../../database/account/register.db.js');
let message = require('../../common/msg_creater.js');
module.exports = function(req,res){
    var data = req.body;
    console.log('服务器收到消息:',data);
    userDb.registerUser(data).then(function(data){
        res.send(message.success_msg('注册成功',{}));
        res.end();
    },function(err){
        res.send(message.error_msg(20000,'注册失败'));
        res.end();
    });
}
