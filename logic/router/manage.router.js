module.exports = function (app) {
    let express = require('express');
    let router = express.Router();
    app.use('/manage', router);
    //获取用户数据
    router.post('/getUser', require('../controller/manage/getUser.controller.js'));
}
