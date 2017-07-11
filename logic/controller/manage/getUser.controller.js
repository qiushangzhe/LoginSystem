var getUserDb = require('../../../database/manage/getUser.db.js');
let message = require('../../common/msg_creater.js');
module.exports = function(req,res){
    getUserDb().then(function(data){
        res.send(message.success_msg('',data));
    },function(err){
        res.send(message.error_msg(10002,err));
    });
}
