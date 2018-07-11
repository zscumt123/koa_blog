/**
 * @description   db数据相关
 * @author zs
 * @date 2018/7/10
 *
 */

const mongoose = require('mongoose');

const categoryModal = require('./categoryModel');




mongoose.Promise = Promise;
mongoose.connect('mongodb://118.24.75.177/blog', (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log('db connect success');
});

exports.categoryModal = categoryModal;
