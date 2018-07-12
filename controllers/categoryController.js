/**
 * @description
 * @author zs
 * @date 2018/7/11
 *
 */

//添加分类
const addCategory = async (ctx, next) => {
    console.log(ctx.request.body);
    const { name = '' } = ctx.request.body;
    //参数校验
    if(!name) {
        console.log(1);
        //参数校验未通过时直接抛出错误，进入错误中间件来处理
        ctx.throw(400, "参数不能为空", {a:"a"});
    }
    ctx.body = {
        message: 'ok',
        code: 0
    };
}


module.exports = {
    addCategory
};