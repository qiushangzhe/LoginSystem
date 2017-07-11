/*
    用户注册信息
    - username : 用户名
    - password : 密码
    - email : 邮箱
    - permission : 权限
        - 超级管理员 = 1
        - 管理员 = 2
        - 普通用户 = 3
    - createTime : 注册时间
    - updateTime : 上次登陆时间
*/
let mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username:String,
    password:String,
    permission:{
        "type":Number,
        "default":3
    },
    createTime:{
        type:String,
        "default":new Date().getTime()
    },
    updateTime:Date,
    email:{
        type:String,
        "default":"xxxx@xx.com"
    }
});
