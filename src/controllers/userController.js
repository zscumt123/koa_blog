/**
 * @description  user控制器
 * @author zs
 * @date 2018/7/10
 *
 */

const userLogin = async (ctx, next) => {
    ctx.body = {
        message: 'ok',
        code: 1
    };
}

module.exports = {
    userLogin
};