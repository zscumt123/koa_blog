/**
 * @description  user控制器
 * @author zs
 * @date 2018/7/10
 *
 */
const jwt = require('jsonwebtoken');
const { successResponse, tipResponse } = require('../utils');
const { userModel } = require('../models');
const config = require('../config');
const userLogin = async (ctx, next) => {
    const { username = '', password = '' } = ctx.request.body;

    if(!username || !password) {
        tipResponse(ctx, '用户名或密码不能为空')
    }
    //先检查用户是否存在
    const doc = await userModel.findOne({ username });
    if(!doc) {
        tipResponse(ctx, '用户不存在');
    }
    //校验用户名和密码
    const hasUser = await userModel.findOne({ username, password });
    if(!hasUser) {
        tipResponse(ctx, '密码错误');
    }
    //生成token
    const token = jwt.sign({ username }, config.secret, { expiresIn:  60 });
    ctx.body = successResponse('登录成功', { token });
}

const register = async (ctx, next) => {
    const { username = '', password = '' } = ctx.request.body;
    if(!username || !password) {
        tipResponse(ctx, '用户名或密码不能为空')
    }
    const doc = await userModel.findOne({ username });
    if(doc) {
        tipResponse(ctx, '该用户名已存在');
    }
    const docItem = new userModel({ username, password });
    await docItem.save();
    ctx.body = successResponse('注册成功');

}

module.exports = {
    userLogin,
    register
};