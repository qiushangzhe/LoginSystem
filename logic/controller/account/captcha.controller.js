/*
    获取验证码
*/
let ccap = require('ccap')();
let message = require('../../common/msg_creater.js');
//获取验证码
exports.getCaptcha = function(req, res) {
    var ary = ccap.get();
    var text = ary[0]; //文字
    var buf = ary[1]; //图片
    console.log("验证码生成：",text);
    req.session.captcha = text;
    console.log("session设置",req.session.captcha);
    res.set('Content-Type', 'image/jpeg');
    res.send(buf);
    res.end();
}

//比对验证码
exports.checkCaptcha = function(req, res) {
    if(!req.body.captcha){
      res.end();
      return;
    }
    if (req.body.captcha.toUpperCase() !== req.session.captcha) {
        console.log('客户端传过来的:', req.body.captcha);
        console.log('服务器保存的:', req.session.captcha);
        res.send(message.error_msg(1,'验证码错误'));
    }else{
        res.send(message.success_msg('验证码正确',{}));
    }
    res.end();
}
