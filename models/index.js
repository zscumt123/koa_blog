/**
 * @description   db数据相关
 * @author zs
 * @date 2018/7/10
 *
 */

const mongoose = require('mongoose');

const categoryModal = require('./categoryModel');
const userModel = require('./userModel');
const  config = require('../config');
const logger = require('../log');



mongoose.Promise = Promise;
mongoose.connect(config.db, {
    useNewUrlParser: true,
    authSource: 'admin'  //账号密码登录需要admin数据库授权
}, (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    logger.info('db connect success!');
});

exports.categoryModal = categoryModal;
exports.userModel = userModel;

