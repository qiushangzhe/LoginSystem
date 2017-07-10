var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
require('colors');
var app = express();
app.set('trust proxy', 1);
app.use(cookieParser());
app.use(session({
    secret: 'lo', //secret 签名
    name: 'id', //返回客户端的key的名称，默认为connect.sid,也可以自己设置。
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000 // 设置返回的cookie时效为30秒，测试用
    }
}));
app.use(bodyParser());

app.use(function (req, res, next) {
  var login_user = req.session.login_user
  console.log(("------------"+req.url+"-----------").blue);
  console.log(login_user);
  console.log(req.session.captcha);
  console.log(req.cookies);
  console.log("------------over-----------".blue);
  if (login_user === undefined) {
    login_user = req.session.login_user = null;
    console.log('---------warning------------'.red);
  }

  next()
})

app.all('*', function(req, res, next) {
    if (req.url == '/favicon.ico') return res.end('');
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", "true"); //是否支持cookie跨域
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Max-Age", "1728000"); // cors预检请求的有效期（单位秒） 20天
    next();
});

require('./logic/app.router.js')(app);
app.listen(12345);
console.log('http://127.0.0.1:12345');
