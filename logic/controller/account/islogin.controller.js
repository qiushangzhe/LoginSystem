// 检查是否已经登陆
let message = require('../../common/msg_creater.js');
module.exports = function(req,res){
    if(req.session.login_user){
        res.send(message.success_msg("用户已登陆"));
    }else{
        res.send(message.error_msg(20001,"用户未登陆"));
    }
    res.end();
}
