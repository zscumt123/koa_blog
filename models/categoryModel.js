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
    name: String,  //分类名称
    //创建时间
    createTime: {
        type: Date,
        default: getTime()
    },
    //该分类下的文章数量，有意义么？
    count: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model("Category", categorySchema);