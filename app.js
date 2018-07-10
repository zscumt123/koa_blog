/**
 * @description 入口文件
 * @author zs
 * @date 2018/7/10
 *
 */

const Koa = require('koa');


const router = require('./routers/index');
const config = require('./config/index');
require('./models');
const app = new Koa();

app.use(router.routes());

app.listen(config.port);