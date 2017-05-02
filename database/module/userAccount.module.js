/*
    username 用户名
    password 密码
    email 邮箱
*/
let mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username:String,
    password:String,
    email:String
});
