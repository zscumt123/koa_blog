/**
 * @description 路由信息
 * @author zs
 * @date 2018/7/10
 *
 */

const Router = require('koa-router');
const { userLogin } = require('../controllers/userController');

const router = new Router({
    prefix: '/api/v1'     //api 前缀
});

router.get('/login', userLogin);

module.exports = router;