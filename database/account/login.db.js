const mongoose = require('mongoose');
const db = require('../db.js');
let userAccountSchema = require('../module/userAccount.module.js');
var userAccountModel = db.model("userAccount", userAccountSchema);

module.exports = function(obj){
    return userAccountModel.find({username:obj.username}).then(function(data){
        return data;
    },function(err){
        console.log(err);
    });
}
