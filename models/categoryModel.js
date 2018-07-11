/**
 * @description  分类
 * @author zs
 * @date 2018/7/11
 *
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getTime = () => Date.now();

const categorySchema= new Schema({
    name: String,
    createTime: {
        type: Date,
        default: getTime()
    },
    count: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model("Category", categorySchema);