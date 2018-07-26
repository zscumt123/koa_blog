/**
 * @description
 * @author zs
 * @date 2018/7/26
 *
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);