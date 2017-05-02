var mongoose = require('mongoose');
var dbPath = "mongodb://127.0.0.1/user_database";
var options = {};
options = {
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
};

var dbConnect = mongoose.connect(dbPath, options);

dbConnect.connection.on("error", function(error) {
    console.log("数据库连接失败：" + error);
});

dbConnect.connection.on("open", function() {
    console.log("------数据库连接成功！------");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback () {
  // yay!
	console.log('mongoose open success');
});

module.exports = db;
