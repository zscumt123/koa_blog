/**
 * @description  公共方法
 * @author zs
 * @date 2018/7/10
 *
 */

//请求返回成功数据格式
const successResponse = (msg, data) => {
    let res = {
        code: 200,
        message: msg,
    };
    if(data) {
        res['data'] = data;
    }
    return res;
}

//手动抛出错误
const tipResponse = (ctx,msg) => {
    ctx && ctx.throw(400, msg, { throw: true });
}


module.exports = {
    successResponse,
    tipResponse
};