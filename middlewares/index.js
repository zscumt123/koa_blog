/**
 * @description  中间件
 * @author zs
 * @date 2018/7/10
 *
 */
//错误处理中间件
async function onerror(ctx, next) {
    try {
        await next();
    } catch (err) {
        //获取错误的状态码和说明
        let status = err.status || 500;
        let message = err.message || '服务器错误';
        //处理手动抛出400错误
        if(status === 400) {
            console.log(err)
            ctx.body = {
                code: 400,
                message
            };
            return;
        }
        //处理token过期错误
        if(status === 401) {
            ctx.body = {
                code: 401,
                message: 'token已过期，请重新登录'
            };
            return;
        }
        //todo 记录错误日志????????
        ctx.body = {
            code:status,
            message: '服务器错误'
        };
    }
}

module.exports = {
    onerror
};