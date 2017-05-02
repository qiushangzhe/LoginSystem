/// 路由
module.exports = function (app) {
    let express = require('express');
    let router = express.Router();
    app.use('/user', router);
    //注册账户
    router.all('/register', require('../controller/account/register.controller.js'));
    //获取验证码
    router.all('/getCaptcha', require('../controller/account/captcha.controller.js').getCaptcha);
    //检查验证码
    router.all('/checkCaptcha', require('../controller/account/captcha.controller.js').checkCaptcha);
    //登录
    router.all('/login',require('../controller/account/login.controller.js'));
    //查看用户名是否重复
    router.all('/checkUsername',require('../controller/account/checkName.controller.js'));
}
