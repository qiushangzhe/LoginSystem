/*
    账号注册接口
*/
let userDb = require('../../../database/account/register.db.js');
module.exports = function(req,res){
    var data = req.body;
    console.log('服务器收到消息:',data);
    userDb.registerUser(data).then(function(data){
        res.send('注册成功');
        res.end();
    },function(err){
        res.send('注册失败');
        res.end();
    });
}
