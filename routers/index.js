/**
 * @description 路由信息
 * @author zs
 * @date 2018/7/10
 *
 */

const Router = require('koa-router');
const { userLogin, register } = require('../controllers/userController');
const { addCategory } = require('../controllers/categoryController');

const router = new Router({
    prefix: '/api/v1'     //api 前缀
});

router.post('/login', userLogin);

router.post('/category', addCategory);
router.post('/register', register);

module.exports = router;