module.exports = function(app){
    //用户相关路由
    require('./router/user.router.js')(app);
    //管理用户的路由
    require('./router/manage.router.js')(app);
}
