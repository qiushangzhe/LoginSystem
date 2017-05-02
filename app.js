var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var log4js = require("log4js");
log4js.configure({
    appenders: [{
        type: 'console'
    }, {
        type: 'file',
        filename: 'cheese.log',
        category: 'cheese'
    }]
});

var app = express();
app.use(session({
    secret: 'SessionSecret', //secret 签名
    //name 返回客户端的key的名称，默认为connect.sid,也可以自己设置。
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5 // 毫秒级
    }
}));
app.use(log4js.connectLogger(log4js.getLogger("cheese"), {
    level: log4js.levels.INFO
}));

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser());

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
