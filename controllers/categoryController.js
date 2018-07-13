/**
 * @description
 * @author zs
 * @date 2018/7/11
 *
 */
const { categoryModal } = require('../models');
const { successResponse, tipResponse } = require('../utils');
//添加分类
const addCategory = async (ctx, next) => {
    console.log(ctx.request.body);
    const { name = '' } = ctx.request.body;
    //参数校验
    if(!name) {
        //参数校验未通过时直接抛出错误，进入错误中间件来处理
        tipResponse(ctx, '参数不能为空');
    }
    //校验分类是否已经存在
    const doc = await categoryModal.findOne({ name });
    //忽略大小写
    const isIn = doc['name'].toLowerCase() === name.toLowerCase();
    if(isIn) {
        tipResponse(ctx, '该分类已经存在');
    }
    const newDoc = new categoryModal({ name });
    await newDoc.save();
    ctx.body = successResponse('添加成功');
}


module.exports = {
    addCategory
};