module.exports = function(app){
    //用户相关路由
    require('./router/user.router.js')(app);
}
