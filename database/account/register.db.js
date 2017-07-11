const mongoose = require('mongoose');
const db = require('../db.js');
let userAccountSchema = require('../module/userAccount.module.js');
var userAccountModel = db.model("userAccount", userAccountSchema);

module.exports = function(obj){
    // console.log('数据库收到对象',obj);
    var userAccount = new userAccountModel(obj);
    return userAccount.save().then(function(data){
        // console.log(data.username,'账号存储成功');
    },function(err){
        // console.log(err);
    });
}
